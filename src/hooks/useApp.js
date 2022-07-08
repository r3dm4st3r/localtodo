import { useContext } from 'react';
import ApplicationContext from "../context/ApplicationProvider";

export default function useApp() {
    return useContext(ApplicationContext);
}