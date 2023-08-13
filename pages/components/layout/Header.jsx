import { useContext, useEffect, useState } from "react";
import Banner from "./Banner";
import s from "./Header.module.css";
import Login from "./Login";
import { GlobalContext } from "../../_app";
import Link from "next/link";

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const { currentUser } = useContext(GlobalContext);

    return (
        <header className={s.header}>
            <div className={s["buttons-wrapper"]}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="">Upgrade</Link>
                        </li>
                        <li>
                            <Link href="">Search</Link>
                        </li>
                        <li>
                            <Link href="">Awards</Link>
                        </li>
                        <li>
                            <Link href="">Auth</Link>
                        </li>
                        <li>
                            <Link href="">Vouches</Link>
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
                                <Link href="/sign-up">Create Account</Link>
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
