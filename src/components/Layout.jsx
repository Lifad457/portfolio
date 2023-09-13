import { Outlet } from "react-router-dom"
import GlobalStyle from "../styles/GlobalStyle.css"

function Layout() {
    return (
        <>
            <GlobalStyle />

            <Outlet />
        </>
    )
}
export default Layout