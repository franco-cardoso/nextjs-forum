import { useRouter } from "next/router";
import Sboard from "../components/home/board.module.css";
import s from "./forum.module.css";
import Thread from "./Thread";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../_app";
import Link from "next/link";

export default function Forum() {
    const { currentUser } = useContext(GlobalContext);
    const router = useRouter();

    return (
        <section className={Sboard["section"]}>
            <Link href={currentUser ? `/forum/create-thread?forum=${router.query.forum}` : "/login"}>
                Create Thread
            </Link>
            <div className={Sboard["section-title"]}>
                <span>Topics</span>
            </div>
            <table className={Sboard["table"] + " " + s["table"]}>
                <tbody>
                    <Thread></Thread>
                </tbody>
            </table>
        </section>
    );
}
