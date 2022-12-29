import { useEffect, useState } from "react"
import { LOCAL_STORAGE } from "../constants/localStorageConstants";
import { UserContext } from "../context/UserContext";

const UserProvider = (props: any) => {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        const isLogin = localStorage.getItem(LOCAL_STORAGE.USER_TOKEN);
        setIsLogin(!!isLogin);
    }, [])

    const handleLogin = (token: string) => {
        setIsLogin(true);
        localStorage.setItem(LOCAL_STORAGE.USER_TOKEN, token);
    }

    const handleLogout = () => {
        setIsLogin(false);
        localStorage.removeItem(LOCAL_STORAGE.USER_TOKEN);
    }

    return (
        <UserContext.Provider
            value={{
                isLogin,
                handleLogin,
                handleLogout
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider