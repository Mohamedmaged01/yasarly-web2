import axios from 'axios';
import { revalidatePath } from 'next/cache'; // Assuming you want to revalidate a page

export async function signupStudent(studentData) {
    try {
        // Create a new FormData object
        const formData = new FormData();

        // Append the fields to the FormData object
        formData.append('StudentName', studentData.StudentName);
        formData.append('StudentEmail', studentData.StudentEmail);
        formData.append('StudentPassword', studentData.StudentPassword);
        formData.append('StudentPhone', studentData.StudentPhone);

        // Make the POST request to the API
        const res = await axios.post(
            "https://yassrly-001-site1.ftempurl.com/api/Student/Insert/Student",
            formData, // Send formData as the body
            {
                headers: {
                    'Content-Type': 'multipart/form-data', // Since form data is being sent
                },
            }
        );

        // Log success and return response data
        console.log('Student signed up successfully:', res.data);
        // revalidatePath('/students'); // Optionally revalidate the student page
        return res.data; // Return the response data
    } catch (error) {
        console.error('Error signing up student:', error);
        throw error; // Re-throw the error after logging it
    }
}
