import Link from "next/link";

function Thread() {
    return (
        <tr>
            <td></td>
            <td>
                <Link href={`/forum/a`}>
                    <h3>test</h3>
                </Link>
                <p>etat</p>
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
