import { useRouter } from "next/router";
import React from "react";
import s from './thread.module.css'

function Thread() {
    const thread = useRouter().query.thread;

    return (
        <div>
            <div className={s["post"]}></div>
        </div>
    );
}

export default Thread;
