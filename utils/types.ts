export interface LoginData {
    email: string,
    password: string,
}

export interface SignUpData extends LoginData {
    fullName: string,
    userType: "teacher" | "student"
}


export type BaseAxiosResponse <T> = {
        data: T,
        success: boolean
    }
    
    

export interface ServerError {
    statusCode: string,
    message: string
}
export interface ServerResponse {
    email: string,
    fullName: string,
    userType: 'student' | 'teacher'
    _id: string
} 