"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
interface UserContextType {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
}
const UserContext = createContext<UserContextType | undefined>(undefined);
// Demo state is ephemeral: no contact data is persisted in browser storage.
export function UserProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <UserContext.Provider value={{ name, setName, email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
}
export function useUser() {
  const value = useContext(UserContext);
  if (!value) throw Error("useUser requires UserProvider");
  return value;
}
