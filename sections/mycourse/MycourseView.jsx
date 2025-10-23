"use client";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import ReactPlayer from "react-player";
import { getCourseById } from "@/actions/course";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import { Box, Input } from "@mui/material";
import { Padding } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { TbPlayerPlayFilled } from "react-icons/tb";
import {
  fetchStudentProfile,
  getCourseComment,
  insertComment,
} from "@/actions/student";
import { BsFillSendFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import YoutupeVideo from "../../app/components/YoutubeVideo";
const MyCourseView = () => {
  const idd = useParams();
  const [courseInfo, setCourseInfo] = useState([]);
  const [selectedLectureUrl, setSelectedLectureUrl] = useState("");
  const [studentData, setSudentData] = useState([]);
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [studentCommentId, setStudentCommentId] = useState(null);

  const router = useRouter();

  // useEffect(() => {
  //   // Function to detect screen recording
  //   async function detectScreenRecording() {
  //     try {
  //       // Request permission to capture the screen
  //       const stream = await navigator.mediaDevices.getDisplayMedia({
  //         video: true,
  //       });

  //       if (stream) {
  //         // If screen recording starts, redirect the user to login
  //         router.push('/login');
  //       }
  //     } catch (error) {
  //       console.error("Screen recording permission denied or error occurred", error);
  //     }
  //   }

  //   // Call the screen recording detection function
  //   detectScreenRecording();
  // }, [router]);

  // useEffect(() => {
  //   const handleVisibilityChange = () => {
  //     if (document.visibilityState === 'hidden') {
  //       // عند تغير حالة النافذة إلى "مخفية" نقوم بتوجيه المستخدم إلى صفحة تسجيل الدخول
  //       router.push('/login');
  //     }
  //   };

  //   // إضافة مستمع لحالة الرؤية
  //   document.addEventListener('visibilitychange', handleVisibilityChange);

  //   // إزالة المستمع عند الخروج من الصفحة لتجنب الذاكرة المتسربة
  //   return () => {
  //     document.removeEventListener('visibilitychange', handleVisibilityChange);
  //   };
  // }, [router]);

  const fetchData = async () => {
    try {
      const courseData = await getCourseById(idd.id);
      setCourseInfo(courseData);
      setSelectedLectureUrl(courseData.courseVideoIntro);
    } catch (error) {
      console.log(error);
    }
  };
  const studentId = localStorage.getItem("studentId");

  const fetchStudent = async () => {
    try {
      const dataProfile = await fetchStudentProfile(studentId);
      setSudentData(dataProfile);
      console.log(dataProfile);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComment = async () => {
    try {
      const comments = await getCourseComment(studentId, idd.id);
      setStudentCommentId(comments[0].studentCourseId);
      setComment(comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchStudent();
    fetchComment();
  }, [idd.id]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value); // Update the newComment state
  };

  const handleCommentSubmit = async () => {
    try {
      await insertComment(studentCommentId, newComment); // Insert the comment
      setNewComment(""); // Clear the input field
      fetchComment(); // Refresh the comments
    } catch (error) {
      console.log(error);
    }
  };
  const playerOptions = {
    controls: [
      "play", // Play button
      "rewind", // Rewind button
      "fast-forward", // Fast forward button
      "progress", // Progress bar
      "current-time", // Current time display
      "duration", // Duration display
      "mute", // Mute button
      "fullscreen", // Fullscreen button
    ],
    autoplay: false, // Set to true if you want it to autoplay
    // You can customize additional options here if needed
  };

  // const [isRecording, setIsRecording] = useState(false);

  // useEffect(() => {
  //   const handleFocus = () => {
  //     setIsRecording(false); // Remove the black overlay when the window is in focus
  //   };

  //   const handleBlur = () => {
  //     setIsRecording(true); // Apply the black overlay when the window loses focus
  //   };

  //   // Attach event listeners for focus and blur
  //   window.addEventListener('focus', handleFocus);
  //   window.addEventListener('blur', handleBlur);

  //   // Clean up event listeners on unmount
  //   return () => {
  //     window.removeEventListener('focus', handleFocus);
  //     window.removeEventListener('blur', handleBlur);
  //   };
  // }, []);

  const extractVideoId = (url) => {
    const videoIdMatch = url?.match(
      /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|embed)\/|\S*?[?&]v=)|\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return videoIdMatch ? videoIdMatch[1] : null;
  };

  const videoId = extractVideoId(selectedLectureUrl);

  const playerRef = useRef(null);
  const [isScreenBlack, setIsScreenBlack] = useState(false);
  const handlePause = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo();
    }
  };

  useEffect(() => {
    // Detect when the page becomes visible or hidden
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        // When user switches to another tab or minimizes
        setIsScreenBlack(true);
      }
    };

    // Detect when the window loses focus (e.g., when user switches to another window)
    const handleWindowBlur = () => {
      setIsScreenBlack(true);
    };

    // Attach event listeners
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleWindowBlur);
    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);
  useEffect(() => {
    if (isScreenBlack) {
      handlePause(); // Pause the video
    }
  }, [isScreenBlack]); // Trigger effect when isScreenBlack changes
  return (
    <container className="p-4 flex gap-2 mb-[100px]">
      {isScreenBlack && <div style={styles.blackScreen}></div>}

      <Box
        sx={{
          // height: "600px",
          width: "75%",
          // background: "#000",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "400px !important",
          }}
        >
          {/* <ReactPlayer
              url={selectedLectureUrl}
              controls

              width='100%'
              height="100%"
            /> */}

          {videoId ? (
            <YoutupeVideo
              videoId={videoId}
              onPause={handlePause}
              playerRef={playerRef}
              watermarkText={studentData?.studentName}
            />
          ) : (
            <p>No video found</p>
          )}
        </Box>
        <Box></Box>

        <Box>
          <h2 className="font-bold text-[#000000] text-[35px]">
            {courseInfo?.courseName}
          </h2>
          <div className="">
            <Tabs className="w-full" aria-label="Basic tabs" defaultValue={0}>
              <TabList disableUnderline>
                <Tab>About Course</Tab>
                <Tab>Comments</Tab>
              </TabList>
              <TabPanel value={0}>
                <div className="flex   flex-col gap-5">
                  <p className="text-[#111827] font-bold text-[20px]">
                    Descriptions
                  </p>
                  <p className=" text-[#6B7280] font-medium text-[20px]">
                    {courseInfo.courseDescription}
                  </p>
                </div>
              </TabPanel>
              <TabPanel value={1}>
                <h1 className="font-bold text-[24px]">Comment section </h1>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    marginTop: 5,
                    alignItems: "center",
                  }}
                >
                  <img
                    src={`https://yassrly-001-site1.ftempurl.com${studentData?.studentImage}`}
                    className="w-[30px] h-[30px] rounded-full"
                  />
                  <div className="flex flex-col ">
                    <p className="font-medium text-[#000000] text-[20px]">
                      {studentData?.studentName}
                    </p>
                    {comment.map((com) => (
                      <Box
                        key={com.studentCourseId}
                        sx={{
                          background: "#EEEEEE",
                          p: 4,
                          borderRadius: "10px",
                          width: "100%",
                        }}
                      >
                        <p className="text-[#6B7280] text-[15px]">
                          {com.studentCourseComment}
                        </p>
                      </Box>
                    ))}
                  </div>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  <img
                    src={`https://yassrly-001-site1.ftempurl.com${studentData.studentImage}`}
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <Input
                    sx={{
                      width: "800px",
                      p: 2,
                      height: "40px",
                      borderRadius: 6,
                      background: "#EEEEEE",
                    }}
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Type to talk"
                  />

                  <Button
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "56px",
                      height: "56px",
                      borderRadius: "100%",
                      color: "white",
                      bgcolor: "#09C1E0",
                      cursor: "pointer",
                    }}
                    onClick={handleCommentSubmit} // Handle comment submission
                  >
                    <BsFillSendFill />
                  </Button>
                </Box>
              </TabPanel>
            </Tabs>
          </div>
        </Box>
      </Box>

      {/* second  */}
      <Box
        sx={{
          height: "700px",
          overflowY: "auto", // Enable vertical scrolling
          width: "25%",
          background: "#FFFBF8",
          display: "flex",
          flexDirection: "column",
          padding: 4,
          gap: 2,
        }}
      >
        <h2 className="font-bold text-[#111827] text-[35px]">Course content</h2>

        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Introductions
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                }}
              >
                <div
                  className="flex  gap-5"
                  onClick={() =>
                    setSelectedLectureUrl(courseInfo.courseVideoIntro)
                  } // Update lecture URL on click
                  style={{ cursor: "pointer" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#F3F4F6",
                      width: "20px",
                      height: "20px",
                      border: "1px solid #000",
                      borderRadius: "100%",
                    }}
                  >
                    <TbPlayerPlayFilled />
                  </Box>
                  <p className="text-[#111827] mb-3 font-medium">
                    Introduction Video
                  </p>
                </div>
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          {courseInfo?.lessons?.map((lesson) => (
            <Accordion key={lesson.monthId}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {lesson?.monthName}
              </AccordionSummary>
              <AccordionDetails>
                {lesson?.lectures.map((lec) => (
                  <Box
                    key={lec.lectureId}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 5,
                    }}
                  >
                    <div
                      className="flex  gap-5"
                      onClick={() => setSelectedLectureUrl(lec.lectureLink)} // Update lecture URL on click
                      style={{ cursor: "pointer" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#F3F4F6",
                          width: "20px",
                          height: "20px",
                          border: "1px solid #000",
                          borderRadius: "100%",
                        }}
                      >
                        <TbPlayerPlayFilled />
                      </Box>
                      <p className="text-[#111827] mb-3 font-medium">
                        {lec.lectureName}
                      </p>
                    </div>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Box>
    </container>
  );
};
const styles = {
  // blackScreen: {
  //   position: "fixed",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "100%",
  //   backgroundColor: "black",
  //   opacity: 1,
  //   zIndex: 9999, // Ensure it's above everything else
  // },
};

export default MyCourseView;
