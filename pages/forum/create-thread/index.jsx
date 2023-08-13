import { useRouter } from "next/router";
import React from "react";
import s from "./create-thread.module.css";
import { useState } from "react";
import axios from "axios";

function index() {
    const [data, setData] = useState({
        title: "",
        content: "",
    });
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const threadData = {
            ...data,
            forum: router.query.forum,
        };

        axios.post("/api/create-thread", threadData, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    const handleUpdate = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <form className={s["form"]} action="">
                <input type="text" name="title" onChange={(e) => handleUpdate(e)} value={data["title"]} />
                <textarea
                    name="content"
                    id=""
                    cols="30"
                    rows="10"
                    onChange={(e) => handleUpdate(e)}
                    value={data["content"]}
                ></textarea>

                <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
            </form>
        </div>
    );
}

export default index;
