import { useRouter } from "next/router";
import React, { useContext } from "react";
import { GlobalContext } from "../_app";
import s from "./thread.module.css";
import { useEffect } from "react";
import Post from "./Post";
import AddPost from "./AddPost";

export const getServerSideProps = async ({ params }) => {
    const req1 = await fetch(process.env.NEXT_PUBLIC_URL + `/api/get-thread?thread=${params.thread}`);
    const threadData = await req1.json();

    const req2 = await fetch(process.env.NEXT_PUBLIC_URL + `/api/get-posts?thread=${params.thread}`)
    const posts = await req2.json()

    return { props:  {threadData: threadData[0], posts: posts.length ? posts : null}  };
};

function Thread({threadData, posts}) {
    const { currentUser } = useContext(GlobalContext);

    // useEffect(() => {
    //     if (thread) fetch(`/api/add-view?t=${thread}`);
    // }, [thread]);

    return (
        <div className={s["thread-wrapper"]}>
            <Post data={threadData}></Post>
            {
                posts ? posts.map((el) => (
                    <Post data={el}></Post>

                )) : ""
            }   
            <AddPost threadId={threadData.id}></AddPost>
        </div>
    );
}

export default Thread;
