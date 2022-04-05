import React from "react"
import ResponsiveAppBar from "./ResponsiveAppBar";

function Layout(props) {
    return (
        <React.Fragment>
            <ResponsiveAppBar/>
            <main>
                {props.children}
            </main>

            <footer>

            </footer>
        </React.Fragment>
    )
}

export default Layout