import { createContext, useContext } from "react";

export const UserContext = createContext("") as any;

export const useUser = () => useContext(UserContext)