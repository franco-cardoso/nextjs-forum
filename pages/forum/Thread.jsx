import Link from "next/link";
import User from "../components/misc/User";
import { DateTime } from "luxon";

function Thread({ title, author, date, id }) {
    const dt = DateTime.fromSeconds(+date).toRelative()
    console.log(DateTime.fromMillis(1692648837))

    return (
        <tr>
            <td></td>
            <td>
                <Link href={`/thread/${id}`}>
                    <h3>{title}</h3>
                </Link>
                <p>
                    Started by <User username={author} />
                </p>
            </td>
            <td>
                <p>
                    X <br />
                    Replies
                </p>
            </td>
            <td>
                <p>
                    X <br />
                    Views
                </p>
            </td>
            <td>
                <a href="">
                    <h4>MOTM: July Voting [OPEN]</h4>
                </a>
                <p>{dt} By <User username={author} /></p>
            </td>
        </tr>
    );
}

export default Thread;
