import axios from 'axios';
import { revalidatePath } from 'next/cache'; 

export async function fetchCourses() {
    try {
      const response = await axios.get('https://yassrly-001-site1.ftempurl.com/api/Course/Select/Home/Course');
  

  
      // const data = await response?.json();
      return response; // Return the data to be used in the component
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  }



  export async function fetchAllCourses () {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };
    
        const payload = {
            courseName: '',
            gradeId: '0',
        }
    
        const res = await axios.post(
            "https://yassrly-001-site1.ftempurl.com/api/Course/Select/All/Course/1/40", {},
            payload,
            { headers: headers }
        );
        
        return res.data.courses; 
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error after logging it
    }
    
}


//getCourse by id
export async function getCourseById(courseId) {
  try {
      const response = await axios.get(`https://yassrly-001-site1.ftempurl.com/api/Course/Select/Course/${courseId}`, {
      });

      console.log("Course data retrieved successfully:", response.data);
      // revalidatePath(`/course/${courseId}`)

      return response.data; // Return the course data
  } catch (error) {
      console.error("Error fetching course data:", error);
      throw error; // Re-throw the error after logging it
  }
}


// Fetch course comments by courseId with pagination
export async function fetchCourseCommentsById(courseId) {
  try {
    // Construct the API URL using the courseId, page, and pageSize
    
    // Make a GET request to the API
    const response = await axios.post( `https://yassrly-001-site1.ftempurl.com/api/Course/Select/Course/Comment/1/40/${courseId}`);
    // Log success and return the course comments
    console.log("Course comments retrieved successfully:", response.data);
    
    return response.data; // Return the comments data
  } catch (error) {
    console.error("Error fetching course comments:", error);
    throw error; // Re-throw the error for handling
  }
}
// Function to get course by student ID
export async function getMyCourseById(studentId) {
  try {
    // Make a GET request to the API with the studentId parameter
    const response = await axios.get(`https://yassrly-001-site1.ftempurl.com/api/Student/Select/Student/Course/${studentId}`);
    
    // Log the response for debugging
    console.log("Course data for student retrieved successfully:", response.data);
    
    // Return the course data
    return response.data;
  } catch (error) {
    // Log the error for debugging
    console.error("Error fetching course data for student:", error);
    
    // Re-throw the error so it can be handled by the caller
    throw error;
  }
}