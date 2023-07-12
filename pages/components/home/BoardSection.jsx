import BoardForum from "./BoardForum";
import s from "./board.module.css";

const BoardSection = () => {
  return (
    <section className={s["section"]}>
      <div className={s["section-title"]}>
        <span>Logo</span>
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
            <BoardForum></BoardForum>
        </tbody>
      </table>
    </section>
  );
};

export default BoardSection;
