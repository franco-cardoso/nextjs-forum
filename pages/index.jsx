import axios from "axios";
import Board from "./components/home/Board";
import { useState } from "react";
import { useEffect } from "react";

// export const getStaticProps = async () => {
//     const req = await fetch(process.env.NEXT_PUBLIC_URL + "/api/get-forums");
//     const data = await req.json();
//     return { props: {  } };
// };

export default function Home({ data }) {
    const [Data, setData] = useState(null);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_URL + "/api/get-forums").then((res) =>
            res.json().then((res) => {
                setData(res);
            })
        );
    }, []);

    return <Board data={Data}></Board>;
}
