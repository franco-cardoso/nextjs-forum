import Header from "./components/layout/Header";

const Layout = (props) => {
    return (
        <div className="globalWrapper">
            <Header></Header>
            <main>{props.children}</main>
        </div>
    );
};

export default Layout;
