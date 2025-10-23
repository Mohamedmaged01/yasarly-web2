'use server'
import { revalidatePath } from 'next/cache'
import axios from 'axios';

export async function docsFetch() {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };

    
        const res = await axios.post(
            "https://yassrly-001-site1.ftempurl.com/api/Doctor/Select/All/Doctor/1/40", {},
            { headers: headers }
        );
        
        console.log(res.data)
        return res.data.doctors
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error after logging it
    }
}
