import { LoginResponse } from "../../types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const TicketServices = {

    registerTickets: async (tickets: any[]): Promise<LoginResponse> => {
        console.log({ tickets });

        const response = await fetch(`${API_BASE_URL}/users/login`, {
            // method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify({
            //     email,
            //     password
            // })
        })
        return response.json();
    },
}