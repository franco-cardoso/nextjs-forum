import { useRouter } from "next/router";
import Sboard from "../components/home/board.module.css";
import s from "./forum.module.css";
import Thread from "./Thread";
import Link from "next/link";
import { getCookie } from "cookies-next";

export const getServerSideProps = async ({ params }) => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-threads?forum=${params.forum}`);
    const threads = await data.json();

    return { props: { threads } };
};

export default function Forum({ threads }) {
    const forum = useRouter().query.forum;
    return (
        <section className={Sboard["section"]}>
            <Link href={getCookie("jwt") ? `/forum/create-thread?forum=${forum}` : "/login"}>Create Thread</Link>
            <div className={Sboard["section-title"]}>
                <span>Topics</span>
            </div>
            <table className={Sboard["table"] + " " + s["table"]}>
                <tbody>
                    {threads?.map((el) => (
                        <Thread title={el.title} date={el.date} author={el.author} key={el.id} id={el.id} forum={forum}></Thread>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
