import { useEffect, useState } from "react";
import BoardForum from "./BoardForum";
import s from "./board.module.css";

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
                        <th>LAST POST</th>
                    </tr>
                </thead>
                <tbody>
                    {forums?.map((item) => (
                        <BoardForum
                            key={item.id}
                            title={item.title}
                            name={item.name}
                            description={item.description}
                            threads={item.threads}
                        ></BoardForum>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
