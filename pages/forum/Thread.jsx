import Link from "next/link";
import User from "../components/misc/User";

function Thread({ title, author, date }) {
    return (
        <tr>
            <td></td>
            <td>
                <Link href={`/forum/a`}>
                    <h3>{title}</h3>
                </Link>
                <p>
                    Started by <User username={author}></User>
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
                <p>{`yeterday, 2}`} By Preaux</p>
            </td>
        </tr>
    );
}

export default Thread;
