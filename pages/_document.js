// pages/_document.js

import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="Portfolio site of Shiju P John"/>
                    <link rel="icon" href={'/favicon.jpg'}/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                            <link
                                href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,600;0,800;1,200;1,300;1,600&display=swap"
                                rel="stylesheet"/>
                 </Head>
                <body>
                <script>0</script>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument