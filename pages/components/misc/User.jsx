import axios from "axios";
import Link from "next/link";
import React from "react";
import { useState } from "react";

function User({ userId }) {
    const [username, setUsername] = useState(userId);

    axios
        .get(`/api/get-username?userid=${userId}`)
        .then((res) => setUsername(res.data.username))
        .catch((err) => console.log(err));

    return (
        <Link href={"/"} className="user-button">
            {username}
        </Link>
    );
}

export default User;
