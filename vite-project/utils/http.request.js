import axios from "axios";
export const base_url = "http://localhost:8080"

export async function postData(endpoint, user) {

    try {
        const res = await axios.post(base_url + endpoint, user)
        return res
    } catch(error) {
        return {status: 500, error}
    }

}