import { useRouter } from "next/router";
import React, { useContext } from "react";
import { GlobalContext } from "../_app";
import s from "./thread.module.css";
import { useEffect } from "react";
import Post from "./Post";
import AddPost from "./AddPost";

export const getServerSideProps = async ({ params }) => {
    const req = await fetch(process.env.NEXT_PUBLIC_URL + `/api/get-thread?thread=${params.thread}`);
    const data = await req.json();
    console.log(data)
    return { props:  {data: data.length ? data[0] : null}  };
};

function Thread(props) {
    const { thread } = props.data;
    const { currentUser } = useContext(GlobalContext);

    useEffect(() => {
        if (thread) fetch(`/api/add-view?t=${thread}`);
    }, [thread]);

    return (
        <div className={s["thread-wrapper"]}>
            <Post data={props.data}></Post>
            <AddPost threadId={thread}></AddPost>
        </div>
    );
}

export default Thread;
