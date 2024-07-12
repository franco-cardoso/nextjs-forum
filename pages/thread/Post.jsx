import s from "./thread.module.css";
import User from "../components/misc/User";
import { DateTime } from "luxon";

function Post(data) {
    const { author, content, date } = data.data;
    // const dateFormat = DateTime.fromSeconds(+date).toRelative()

    return (
        <div className={s["post"]}>
            <div className={s["post-profile"]}>
                <User username={author}></User>
                <img src="https://picsum.photos/140/140" alt="" />
            </div>
            <div className={s["post-content-wrapper"]}>
                <div>
                    <span className={s["post-date"]}>{date}</span>
                </div>
                <div className={s["post-content"]}>{content}</div>
            </div>
        </div>
    );
}

export default Post;
