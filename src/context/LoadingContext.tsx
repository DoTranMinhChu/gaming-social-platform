import { createContext, useContext } from "react";

export const LoadingContext = createContext("") as any;

export const useLoading = () => useContext(LoadingContext)