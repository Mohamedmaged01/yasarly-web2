import axios from "axios";
export async function fetchStudentProfile(studentId) {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };
        const response = await fetch(`https://yassrly-001-site1.ftempurl.com/api/Student/Select/Student/Profile/${studentId}`, {
            method: "GET",
            headers: { headers }
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Parsing the response to JSON

        return data;

    } catch (error) {
        console.error("Error creating student:", error);
    }
}



export async function getCourseComment(studentId, courseId) {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };
        const response = await fetch(`https://yassrly-001-site1.ftempurl.com/api/Student/Select/Student/Comment/${studentId}/${courseId}`, {
            method: "GET",
            headers: { headers }
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Parsing the response to JSON

        return data;

    } catch (error) {
        console.error("Error creating student:", error);
    }
}


export async function insertComment(studentCourseId, comment) {
    try {
        // Define the API endpoint with the studentCourseId
        const url = `https://yassrly-001-site1.ftempurl.com/api/Student/Insert/Course/Comment/${studentCourseId}`;

        // Define the request body with the comment
        const body = {
            studentCourseComment: comment
        };

        // Define headers
        const headers = {
            'Content-Type': 'application/json',
            // Add any additional headers here if needed
        };

        // Send the POST request to the API endpoint with the body and headers
        const response = await axios.post(url, body, { headers });

        // Log the response for debugging
        console.log("Comment inserted successfully:", response.data);

        // Return the response data
        return response.data;
    } catch (error) {
        // Log the error for debugging
        console.error("Error inserting comment:", error);

        // Re-throw the error for handling by the caller
        throw error;
    }
}



export async function updateStudent(studentId, formData) {
    try {
        const response = await fetch(`https://yassrly-001-site1.ftempurl.com/api/Student/Update/Student/${studentId}`, {
            method: "PUT",
            headers: {
                // 'Content-Type': 'multipart/form-data', // Not needed for FormData
            },
            body: formData,
        })
        revalidatePath('/students')
    } catch (error) {
        console.error("Error creating student:", error);
    }
}