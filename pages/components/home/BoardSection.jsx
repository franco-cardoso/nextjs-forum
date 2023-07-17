import { useEffect, useState } from "react";
import BoardForum from "./BoardForum";
import s from "./board.module.css";

const BoardSection = ({title, category}) => {
  const [forums, setForums] = useState(undefined);
  useEffect(() => {
    fetch(`http://localhost:3000/api/get-forums?category=${category}`).then((response) =>
      response.json().then((result) => {
        console.log(result)
        setForums(result.data);
      })
    );
  }, []);

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
          {forums?.rows.map((item) => (
            <BoardForum key={item.id} title={item.title} name={item.name} description={item.description}></BoardForum>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default BoardSection;
