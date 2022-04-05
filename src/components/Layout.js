import React from "react"
import Head from "next/head"
function Layout(props){
return(
    <React.Fragment>
         <Head>
        <title>SHIJU P JOHN</title>
        <meta name="description" content="Portfolio site of Shiju P John" />
        <link rel="icon" href={'/favicon.jpg'} />
      </Head>
      <main >
      {props.children}
      </main>

      <footer >
       
      </footer>
    </React.Fragment>
)
}
export default Layout