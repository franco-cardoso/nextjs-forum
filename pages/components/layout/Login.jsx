import { useState } from 'react';
import s from './Header.module.css'
import axios from 'axios';


const Login = () => {
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
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className={s["form-wrapper"]} >
        <form action="" className={s["login-form"]}>

          <label htmlFor="username">Username or Email</label>
          <input type="text" name="username" required value={formData["username"]} onChange={(e) => handleUpdate(e)} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" required value={formData["password"]} onChange={(e) => handleUpdate(e)}/>

          <input type="submit" onClick={(e) => handleSubmit(e)} />
        </form>
    </div>
  )
}

export default Login