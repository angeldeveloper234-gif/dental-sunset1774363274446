"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { config } from "@/config";

interface UserContextType {
    name: string;
    setName: (name: string) => void;
    email: string;
    setEmail: (email: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setName(localStorage.getItem("user_name") || "");
        setEmail(localStorage.getItem("user_email") || "");
        setHydrated(true);
    }, []);


    useEffect(() => {
        if (hydrated && name) localStorage.setItem("user_name", name);
    }, [name, hydrated]);

    useEffect(() => {
        if (hydrated && email) localStorage.setItem("user_email", email);
    }, [email, hydrated]);



    return (
        <UserContext.Provider value={{ name, setName, email, setEmail }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}
