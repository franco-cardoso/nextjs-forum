import { useRouter } from "next/router";
import Sboard from "../components/home/board.module.css";
import s from "./forum.module.css";
import Thread from "./Thread";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../_app";
import Link from "next/link";

export const getServerSideProps = async ({ params }) => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-threads?forum=${params.forum}`);
    const threads = await data.json();

    return { props: { threads } };
};

export default function Forum({threads}) {
    const { currentUser } = useContext(GlobalContext);
    const router = useRouter();
    console.log(threads)

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
                    {threads?.map(el => (
                        <Thread title={el.title} author={el.author} key={el.id} ></Thread>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
