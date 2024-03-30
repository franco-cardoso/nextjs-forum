import { DateTime } from "luxon";
import Link from "next/link";
import User from "../misc/User"

const BoardForum = ({ title, threads, name, description, lastThread }) => {
    const dt = DateTime.fromSeconds(+lastThread.date).setLocale("en-US").toRelative();;
    console.log(lastThread)

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
                <Link href={`/thread/${lastThread.id}`}>
                    <h4>{lastThread.title}</h4>
                <p>{dt} By <User username={lastThread.author}/></p>
                </Link>
            </td>
        </tr>
    );
};

export default BoardForum;

