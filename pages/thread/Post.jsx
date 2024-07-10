import s from "./thread.module.css"
import User from "../components/misc/User"

function Post() {
    return ( 
        <div className={s["post"]}>
            <div className={s["post-profile"]}>
                <User username={"username"}></User>
                <img src="https://picsum.photos/140/140" alt="" />
            </div>
            <div className={s["post-content-wrapper"]}>
                <div>
                    <span className={s["post-date"]}>Posted 2 june asdasd</span>
                </div>
                <div className={s["post-content"]}>
                   
                </div>
            </div>
        </div>
     );
}

export default Post;