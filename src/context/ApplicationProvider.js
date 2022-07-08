import { createContext, useState } from 'react';
const ApplicationContext = createContext({});

export default ApplicationContext;

export const ApplicationProvider = ({ children }) => {
    const [app, setApp] = useState({todo: [], todoList: []});

    return (
        <ApplicationContext.Provider value={{ app, setApp }}>
            {children}
        </ApplicationContext.Provider>
    );
};