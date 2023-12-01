import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Splendor</title>
                    <link rel="icon" type="image/png" href="/static/favicon.png" />
                    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;400;600&display=swap" rel="stylesheet"/>                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}
