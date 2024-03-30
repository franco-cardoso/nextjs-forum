import { DateTime } from "luxon";
import Link from "next/link";
import User from "../misc/User"

const BoardForum = ({ title, threads, name, description, lastPost }) => {
    const dt = DateTime.fromSeconds(+lastPost.date).setLocale("en-US").toRelative();;
    console.log(lastPost)

    return (
        <tr>
            <td></td>
            <td>
                <Link href={`/forum/${name}`}>
                    <h3>{title}</h3>
                </Link>
                <p>{description}</p>
            </td>
            <td>
                <p>{threads}</p>
            </td>
            <td>
                <p>38,986</p>
            </td>
            <td>
                <a href="">
                    <h4>{lastPost.title}</h4>
                </a>
                <p>{dt} By <User username={lastPost.author}/></p>
            </td>
        </tr>
    );
};

export default BoardForum;

