import { useState } from "react";
import s from "../sign-up/signup.module.css";
import axios from "axios";

export default function index(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleUpdate = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/sign-in", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                document.location = "/";
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className={s["container"]}>
            <h1>Sign in</h1>
            <form action="" className={s["form"]}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    required
                    value={formData["username"]}
                    onChange={(e) => handleUpdate(e)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    required
                    value={formData["password"]}
                    onChange={(e) => handleUpdate(e)}
                />

                <input type="submit" value="Log In" onClick={(e) => handleSubmit(e)} />
            </form>
        </div>
    );
}
