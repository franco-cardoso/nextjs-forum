import { useState } from "react";
import s from "./signup.module.css";
import axios from "axios";

export default function index() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
      .post("/api/create-user", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className={s["container"]}>
      <h1>Sign up</h1>
      <form action="" className={s["form"]}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" required value={formData["username"]} onChange={(e) => handleUpdate(e)} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" required value={formData["email"]} onChange={(e) => handleUpdate(e)} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          required
          value={formData["password"]}
          onChange={(e) => handleUpdate(e)}
        />

        <input type="submit" value="Sign Up" onClick={(e) => handleSubmit(e)} />
      </form>
    </div>
  );
}
