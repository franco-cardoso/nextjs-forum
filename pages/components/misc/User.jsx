import axios from "axios";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function User({username}) {
    return (
        <Link href={"/"} className="user-button">
            {username}
        </Link>
    );
}

export default User;
