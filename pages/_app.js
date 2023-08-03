import { createContext, useEffect } from "react";
import "../styles/globals.css";
import Layout from "./Layout";
import axios from "axios";
import { useState } from "react";
export const GlobalContext = createContext();

export default function MyApp({ Component, pageProps }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        axios("/api/token-login")
            .then((res) => {
                if (Object.keys(res.data).length) {
                    setCurrentUser(res.data);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                currentUser,
            }}
        >
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </GlobalContext.Provider>
    );
}
