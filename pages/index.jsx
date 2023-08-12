import axios from "axios";
import Board from "./components/home/Board";

export const getStaticProps = async () => {
    const req = await fetch(process.env.VERCEL_URL + "/api/get-forums");
    const data = await req.json();
    return { props: { data } };
};

export default function Home({ data }) {
    return <Board data={data}></Board>;
}
