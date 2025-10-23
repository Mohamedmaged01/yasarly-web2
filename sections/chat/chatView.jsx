/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useEffect, useState, useRef } from "react";
import * as signalR from "@microsoft/signalr";
import { TextField, Box, Avatar, IconButton } from '@mui/material';
import { FiSearch } from 'react-icons/fi';
import { BsSend } from 'react-icons/bs';
import { getAllChats, getChatById } from "../../actions/chat";

const ChatView = () => {
    const [connection, setConnection] = useState(null);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [docId, setDocId] = useState(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const doctorId = parseInt(localStorage.getItem('doctorId'), 10);
        setDocId(doctorId);
        const fetchChats = async () => {
            try {
                const chats = await getAllChats(0, doctorId);
                setStudents(chats);
            } catch (error) {
                console.error("Error fetching chats:", error);
            }
        };
        fetchChats();
    }, []);

    useEffect(() => {
        if (!selectedStudent || !docId) return;
        const fetchMessages = async () => {
            try {
                const chatMessages = await getChatById(selectedStudent.chatId);
                setMessages(chatMessages.filter(
                    msg => (msg.StudentId === selectedStudent.studentId && msg.DoctorId === docId) ||
                            (msg.StudentId === docId && msg.DoctorId === selectedStudent.studentId)
                ));
            } catch (error) {
                console.error("Error fetching chat messages:", error);
            }
        };
        fetchMessages();
    }, [selectedStudent, docId]);

    // SignalR connection for real-time updates
    useEffect(() => {
        if (!docId) return;
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl(`http://yassrly-001-site1.ftempurl.com/chatHub?userId=${docId}`)
            .build();
        newConnection.start().then(() => {
            newConnection.on("ReceiveMessageFromUser", (msg) => {
                if (selectedStudent && (msg.StudentId === selectedStudent.studentId || msg.FromId === selectedStudent.studentId)) {
                    setMessages(prev => [...prev, msg]);
                }
            });
            setConnection(newConnection);
        }).catch(err => console.error("SignalR error:", err));
        return () => { newConnection.stop(); };
    }, [docId, selectedStudent]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleSend = async () => {
        if (!message.trim() || !connection || !selectedStudent) return;
        const payload = {
            StudentId: selectedStudent.studentId,
            DoctorId: docId,
            Mesage: message,
            Sender: "Doctor",
            FromId: docId,
        };
        try {
            await connection.invoke("SendMessageToUser", payload);
            setMessages(prev => [...prev, { ...payload, fromId: docId }]);
            setMessage("");
        } catch (err) {
            console.error("Error sending message:", err);
        }
    };

    return (
        <Box sx={{ display: "flex", height: "700px", bgcolor: "#F7F8FA" }}>
            <Box sx={{ width: 320, bgcolor: "#fff", borderRight: "1px solid #eee", p: 2, display: "flex", flexDirection: "column" }}>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        variant="outlined"
                        placeholder="Search student..."
                        fullWidth
                        InputProps={{ startAdornment: <FiSearch style={{ marginRight: 8 }} /> }}
                    />
                </Box>
                <Box sx={{ flex: 1, overflowY: "auto" }}>
                    <pre style={{ fontSize: 12, color: 'red', background: '#fff', padding: 8, marginBottom: 8 }}>{JSON.stringify(students, null, 2)}</pre>
                    {(Array.isArray(students) ? students : []).map((item, idx) => {
                        const studentId = item.studentId || item.StudentId || item.student?.studentId || item.student?.StudentId || item.id;
                        const studentName = item.studentName || item.StudentName || item.student?.studentName || item.student?.StudentName || item.name || `Student ${idx+1}`;
                        const studentImage = item.studentImage || item.StudentImage || item.student?.studentImage || item.student?.StudentImage;
                        const studentEmail = item.studentEmail || item.StudentEmail || item.student?.studentEmail || item.student?.StudentEmail || item.email;
                        const chatId = item.chatId || item.ChatId || item.id;
                        if (!chatId) return null;
                        return (
                            <Box
                                key={chatId}
                                sx={{ display: "flex", alignItems: "center", p: 1, mb: 1, cursor: "pointer", bgcolor: selectedStudent?.chatId === chatId ? "#E6F7FF" : "#fff", borderRadius: 2 }}
                                onClick={() => setSelectedStudent({ studentId, studentName, studentImage, studentEmail, chatId })}
                            >
                                <Avatar src={studentImage ? `https://yassrly-001-site1.ftempurl.com${studentImage}` : "/profile.png"} sx={{ mr: 2 }} />
                                <Box sx={{ flex: 1 }}>
                                    <div className="font-bold text-[#111827]">{studentName}</div>
                                    <div className="text-xs text-[#6B7280]">{studentEmail || "Student"}</div>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                <Box sx={{ p: 3, borderBottom: "1px solid #eee", display: "flex", alignItems: "center", bgcolor: "#fff" }}>
                    {selectedStudent && (
                        <>
                            <Avatar src={selectedStudent.studentImage ? `https://yassrly-001-site1.ftempurl.com${selectedStudent.studentImage}` : "/profile.png"} sx={{ mr: 2 }} />
                            <div className="font-bold text-lg text-[#111827]">{selectedStudent.studentName}</div>
                        </>
                    )}
                </Box>
                <Box sx={{ flex: 1, p: 3, overflowY: "auto", bgcolor: "#F7F8FA" }}>
                    {selectedStudent ? (
                        messages.map((msg, idx) => (
                            <Box key={idx} sx={{ display: "flex", justifyContent: msg.FromId === docId ? "flex-end" : "flex-start", mb: 2 }}>
                                <Box sx={{ maxWidth: "60%", bgcolor: msg.FromId === docId ? "#0A90B0" : "#fff", color: msg.FromId === docId ? "#fff" : "#111827", p: 2, borderRadius: 2, boxShadow: 1 }}>
                                    <div className="text-sm">{msg.Mesage || msg.message}</div>
                                </Box>
                            </Box>
                        ))
                    ) : (
                        <div className="text-center text-[#6B7280] mt-10">Select a student to start chatting.</div>
                    )}
                    <div ref={messagesEndRef} />
                </Box>
                {selectedStudent && (
                    <Box sx={{ p: 2, borderTop: "1px solid #eee", bgcolor: "#fff", display: "flex", alignItems: "center" }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Type a message..."
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
                        />
                        <IconButton color="primary" onClick={handleSend} sx={{ ml: 2 }}>
                            <BsSend size={24} />
                        </IconButton>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default ChatView;
