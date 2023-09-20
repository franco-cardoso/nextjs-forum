import { useRouter } from "next/router";
import React from "react";
import s from "./thread.module.css";
import { useEffect } from "react";

function Thread() {
    const thread = useRouter().query.thread;
    useEffect(() => {
        if (thread) fetch(`/api/add-view?t=${thread}`);
    }, [thread]);

    return (
        <div>
            <div className={s["post"]}></div>
        </div>
    );
}

export default Thread;
