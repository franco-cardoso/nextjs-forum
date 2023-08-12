import { DateTime } from "luxon";
import Link from "next/link";

const BoardForum = ({ title, name, description }) => {
    const d = DateTime.now().minus({ days: 1 });

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
                <p>129</p>
            </td>
            <td>
                <p>38,986</p>
            </td>
            <td>
                <a href="">
                    <h4>MOTM: July Voting [OPEN]</h4>
                </a>
                <p>{`yeterday, ${d.toFormat("h:mm a")}`} By Preaux</p>
            </td>
        </tr>
    );
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default BoardForum;
