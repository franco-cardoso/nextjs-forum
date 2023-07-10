import Header from "./components/layout/Header"

const Layout = (props) => {
  return (
    <div className="globalWrapper">
        <Header></Header>
        {props.children}
    </div>
    
  )
}

export default Layout