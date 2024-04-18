export type LoginResponse = {
    token: string
    user: {
        id: string
        email: string
        balance?: number
    }
    message?: string
}
