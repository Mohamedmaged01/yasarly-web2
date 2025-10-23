import axios from 'axios';
import { revalidatePath } from 'next/cache'; // If needed for revalidating paths

export async function getAllChats(studentId, doctorId) {
    try {
        const body = {
            studentId: studentId,
            doctorId: doctorId
        };

        const response = await axios.post("http://yassrly-001-site1.ftempurl.com/api/Chat/Select/All/Chat", body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log("Chats fetched successfully:", response.data);
        
        // If you need to revalidate a path after fetching the chats
        // revalidatePath('/chats'); 

        return response.data; // Return the chat data
    } catch (error) {
        console.error("Error fetching chats:", error);
        throw error; // Re-throw the error after logging it
    }
}




export const getChatById = async (chatId) => {
    try {
        const response = await fetch(`http://yassrly-001-site1.ftempurl.com/api/Chat/Select/Chat/${chatId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch chat data");
        }

        const chatData = await response.json();
        return chatData;
    } catch (error) {
        console.error("Error fetching chat:", error);
        throw error;
    }
};