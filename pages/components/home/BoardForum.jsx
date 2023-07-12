const BoardForum = () => {
  const d = new Date(Date.now())
  console.log(d)

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
          <p>Yesterday, 02:48 PM By Preaux</p>
        </a>
      </td>
    </tr>
  );
};

export default BoardForum;
