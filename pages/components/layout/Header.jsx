import Banner from "./Banner";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s["buttons-wrapper"]}>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">Upgrade</a>
            </li>
            <li>
              <a href="">Search</a>
            </li>
            <li>
              <a href="">Awards</a>
            </li>
            <li>
              <a href="">Auth</a>
            </li>
            <li>
              <a href="">Vouches</a>
            </li>
          </ul>
        </nav>

        <div className={s.login}>
          <ul>
            <li>
              <a href="">Sign In</a>
            </li>
            <li>
              <a href="/sign-up">Create Account</a>
            </li>
          </ul>
        </div>
      </div>
      <Banner></Banner>
    </header>
  );
};

export default Header;
