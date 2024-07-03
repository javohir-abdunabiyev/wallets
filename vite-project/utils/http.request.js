import axios from "axios";
export const base_url = import.meta.env.VITE_BASE_URL


export async function postData(endpoint, user) {

    try {
        const res = await axios.post(base_url + endpoint, user)
        return res
    } catch(error) {
        return {status: 500, error}
    }

}


export const data = async (endpoint) => {
    try {
        const res = await axios.get(base_url + endpoint)

        return res
    } catch(e) {
        console.error(error)
    }
}

export const actions = async (endpoint) => {
    try {
        const res = await axios.get(base_url + endpoint)

        return res
    } catch(e) {
        console.error(error)
    }
}


export async function getFixers(endpoint) {
    const locale = localStorage.getItem('symbols')

    if(!locale) {
        try {
            const res = await axios.get(import.meta.env.VITE_PUBLIC_FIXER_URL + endpoint, {
                headers: {
                    apikey: import.meta.env.VITE_API_KEY,
                    "Content-Type": "application/json"
                }
            })
    
            localStorage.setItem('symbols', JSON.stringify(res.data.symbols))
    
            return res.data.symbols
        } catch(error) {
            return {status: 500, error}
        }

    }

    return JSON.parse(locale)

}
