import Spinnger from "../components/misc/spinnger.svg";
import { useRouter } from "next/router";
import Sboard from "../components/home/board.module.css";
import s from "./forum.module.css";
import Thread from "./Thread";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Image from "next/image";

export const getServerSideProps = async ({ params }) => {
    return { props: { forum: params.forum } };
};

export default function Forum({ forum }) {
    // const forum = useRouter().query.forum;
    const [threads, setThreads] = useState(null);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-threads?forum=${forum}`)
            .then((res) => {
                res.json().then((res) => setThreads(res));
            })
            .catch((err) => console.log(err));
    }, [forum]);

    return (
        <section className={Sboard["section"]}>
            <Link href={getCookie("jwt") ? `/forum/create-thread?forum=${forum}` : "/login"}>Create Thread</Link>
            <div className={Sboard["section-title"]}>
                <span>Topics</span>
            </div>
            <table className={Sboard["table"] + " " + s["table"]}>
                <tbody>
                    {threads?.map((el) => (
                        <Thread
                            title={el.title}
                            date={el.date}
                            author={el.author}
                            key={el.id}
                            id={el.id}
                            forum={forum}
                            views={el.views}
                        ></Thread>
                    ))}
                </tbody>
            </table>
            {!threads && (
                <div style={{ padding: "40px 0 40px 0" }}>
                    <Image src={Spinnger} height={80}></Image>
                </div>
            )}
        </section>
    );
}
