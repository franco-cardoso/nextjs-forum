import s from "./Header.module.css"

const Header = () => {
  return (
    <header className={s.header}>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Upgrade</a></li>
                <li><a href="">Search</a></li>
                <li><a href="">Awards</a></li>
                <li><a href="">Auth</a></li>
                <li><a href="">Vouches</a></li>
            </ul>
        </nav>

        <div className={s.login}>
            <ul>
                <li><a href="">Sign In</a></li>
                <li><a href="">Create Account</a></li>
            </ul>
        </div>
    </header>
  )
}

export default Header