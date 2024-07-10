import { useState } from "react";
import s from "./thread.module.css";

function AddPost() {
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
        e.preventDefault()
    }


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
