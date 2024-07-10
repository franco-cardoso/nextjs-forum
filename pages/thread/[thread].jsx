import { useRouter } from "next/router";
import React, { useContext } from "react";
import { GlobalContext } from "../_app";
import s from "./thread.module.css";
import { useEffect } from "react";
import Post from "./Post";
import AddPost from "./AddPost";

function Thread() {
    const { currentUser } = useContext(GlobalContext);
    console.log(currentUser)
    const thread = useRouter().query.thread;
    useEffect(() => {
        if (thread) fetch(`/api/add-view?t=${thread}`);
    }, [thread]);

    return (
        <div className={s["thread-wrapper"]}>
            <Post></Post>
            <AddPost></AddPost>
        </div>
    );
}

export default Thread;
