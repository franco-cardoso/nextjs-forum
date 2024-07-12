import Link from "next/link";
import User from "../components/misc/User";
import { DateTime } from "luxon";
import s from './forum.module.css'

function Thread({ title, author, date, id, views, replies }) {
    const dt = DateTime.fromSeconds(+date).setLocale("en-US").toRelative();

    return (
        <tr>
            <td></td>
            <td>
                <Link className={s["title-wrapper"]} href={`/thread/${id}`}>
                    <h3>{title}</h3>
                    <p>{dt}</p>
                </Link>
                <p>
                    Started by <User username={author} />
                </p>
            </td>
            <td>
                <p>
                    {replies} <br />
                    Replies
                </p>
            </td>
            <td>
                <p>
                    {views} <br />
                    Views
                </p>
            </td>
            <td>
                <a href="">
                    <h4>asds</h4>
                </a>
                <p>
                    {dt}
                </p>
            </td>
        </tr>
    );
}

export default Thread;
