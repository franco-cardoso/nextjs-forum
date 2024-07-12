import { useContext, useState } from "react";
import s from "./thread.module.css";
import { GlobalContext } from "../_app";
import { DateTime } from "luxon";
import axios from "axios";
import { headers } from "next/dist/client/components/headers";

function AddPost({ threadId }) {
    const { currentUser } = useContext(GlobalContext);

    const [postData, setPostData] = useState({
        post: "",
    });

    const handleUpdate = (e) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            ...postData,
            date: DateTime.now().toMillis(),
            user: currentUser.username,
            threadId,
        };
        axios
            .post("/api/create-post", payload, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <div className={s["addpost-wrapper"]}>
            <div>
                <textarea name="post" id="post" value={postData["post"]} onChange={(e) => handleUpdate(e)}></textarea>
            </div>
            <div>
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </div>
        </div>
    );
}

export default AddPost;
