import BoardForum from "./BoardForum";
import s from "./board.module.css";
import Spinner from "../misc/Spinner";
import Spinnger from '../misc/spinnger.svg'
import Image from "next/image";

export default function BoardSection({ title, forums }) {

    return (
        <section className={s["section"]}>
            <div className={s["section-title"]}>
                <span>{title}</span>
            </div>
            <table className={s["table"]}>
                <thead>
                    <tr>
                        <th></th>
                        <th>FORUM</th>
                        <th>THREADS</th>
                        <th>POSTS</th>
                        <th>LAST THREAD</th>
                    </tr>
                </thead>
                <tbody>
                    {forums.length ? forums.map((item) => (
                        <BoardForum
                        key={item.id}
                        title={item.title}
                        name={item.name}
                        description={item.description}
                        threads={item.threads}
                        lastThread= {item.lastThread}
                        ></BoardForum>
                    )) : ""}
                </tbody>
            </table>
            {forums ? (
                ""
            ) : ( 
                <div style={{ padding: "40px 0 40px 0"}}>
                    <Image src={Spinnger} height={80}></Image>
                </div>
                )}
        </section>
    );
}
