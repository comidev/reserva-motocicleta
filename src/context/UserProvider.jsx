import { useState, createContext } from "react";

const Context = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>;
}
export default Context;
