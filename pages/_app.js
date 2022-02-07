import { ChakraProvider } from "@chakra-ui/react";
import LanguageProvider from "../context/languageProvider.js";

import Layout from '../components/layouts/main.js'

const Website = ({Component, pageProps, router}) => {
    return (
        <ChakraProvider>
            <LanguageProvider>
                <Layout router={router}>
                    <Component {...pageProps} key={router.route} />
                </Layout>
            </LanguageProvider>
        </ChakraProvider>
    )
}

export default Website