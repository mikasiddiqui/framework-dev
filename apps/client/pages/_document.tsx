import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { Routes } from '@framework/constants'
class AppDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles]),
        }
    }

    render() {
        return (
            <Html lang="en">
                <title>Framework</title>

                <Head>
                    <link rel="shortcut icon" href={Routes.app.assets.favicon} />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default AppDocument
