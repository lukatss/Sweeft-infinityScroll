import { createContext, useState } from "react";

export const usersHistoryContext = createContext();

const UsersProviderComponent = ({ children }) => {
    const [usersHistory, setUsersHistory] = useState([]);

    return (
        <usersHistoryContext.Provider value={{ usersHistory, setUsersHistory }}>
            {children}
        </usersHistoryContext.Provider>
    );
};

export default UsersProviderComponent;