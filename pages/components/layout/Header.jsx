import { useContext, useEffect, useState } from "react";
import Banner from "./Banner";
import s from "./Header.module.css";
import Login from "./Login";
import { GlobalContext } from "../../_app";

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const { currentUser } = useContext(GlobalContext);

    return (
        <header className={s.header}>
            <div className={s["buttons-wrapper"]}>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="">Upgrade</a>
                        </li>
                        <li>
                            <a href="">Search</a>
                        </li>
                        <li>
                            <a href="">Awards</a>
                        </li>
                        <li>
                            <a href="">Auth</a>
                        </li>
                        <li>
                            <a href="">Vouches</a>
                        </li>
                    </ul>
                </nav>

                <div className={s.login}>
                    {currentUser ? (
                        <ul>
                            <li>
                                <a href="">{currentUser.username}</a>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li className={s["login-button"]}>
                                <a onClick={() => setShowLogin(!showLogin)}>Sign In</a>
                                {showLogin && <Login></Login>}
                            </li>
                            <li>
                                <a href="/sign-up">Create Account</a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            <Banner></Banner>
        </header>
    );
};

export default Header;
