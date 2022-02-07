import Head from 'next/head'
import {Flex, Box, Container, Image, VStack, Text} from '@chakra-ui/react'
import React, {useContext, useState} from 'react'

import {content, defaultLanguage} from '../../languages/content.js'

import { fontColor, specialFontColor } from '../../constants/Colors'

import { LanguageContext } from '../../context/languageProvider.js'

const Main = ({children, router}) => {

	const [lang, setLang] = useContext(LanguageContext)


	return (
		<Box as="main" pb={8}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<title>Manuel Martínez - Homepage</title>
			</Head>

			<Container maxW="full" backgroundColor="#FFE9CB">
				<VStack spacing={0}>
					<Image boxSize="300px" src="/images/sunmoon.png" alt="sunmoon"/>
					 
					<Text fontSize="3xl" fontWeight="bold" color={fontColor}>{content[lang].logoPhrase}</Text>
					<Text fontSize="4xl" fontWeight="black" color={specialFontColor}>{content[lang].logoPhraseSpecial}</Text>
					
				</VStack>
				
			</Container>

			<Container maxW="container.md">
				{children}
			</Container>
		</Box>
	)
}

export default Main;
