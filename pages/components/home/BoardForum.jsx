import { DateTime } from "luxon";

const BoardForum = () => {
  const d = DateTime.now().minus({ days: 1 });

  return (
    <tr>
      <td></td>
      <td>
        <a href="">
          <h3>Announcements</h3>
        </a>
        <p>Look here for announcements regarding Nulled.</p>
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
        <p>{`${capitalize(d.toRelativeCalendar())}, ${d.toFormat("h:mm a")}`} By Preaux</p>
      </td>
    </tr>
  );
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default BoardForum;
