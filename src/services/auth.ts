import { wait } from ".";
import { LoginForm } from "../pages/Login";

export const login = async (data: LoginForm) => {
    await wait();
    return {userName: data.userName}
}