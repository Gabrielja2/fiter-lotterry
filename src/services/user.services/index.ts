const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const UserServices = {

    login: async (email: string, password: string) => {
        const response = await fetch(`${API_BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        return response.json();
    },

    register: async (email: string, password: string) => {
        const response = await fetch(`${API_BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        return response.json();
    }
}