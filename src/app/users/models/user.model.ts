export default interface UserInterface {
    id?: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isBlocked?: boolean;
}