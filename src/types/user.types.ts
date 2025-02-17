export interface IUser {
    email: string;
    nickname: string;
    phone?: string;
    age: number;
    points?: number;
    isActive?: boolean;
    createdAt?: Date;
}
