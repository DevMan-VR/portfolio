
import { Container, Image, Text, Center } from "@chakra-ui/react";
import React , {useState, useContext} from 'react'

import { fontColor } from "../constants/Colors";

import { defaultLanguage, content } from "../languages/content";
import { LanguageContext } from "../context/languageProvider";
const Homepage = () => {
	const [lang, setLang] = useContext(LanguageContext)

	return (
		<>
			<Container ml={15} display="flex" maxW="container.md" mt={16} justifyContent="center" alignItems="center">

			
					<Image boxSize="110px" src="/images/manuProfile.png" alt="Manu Profile Icon" />

					<Container display="flex" flexDirection="column" p={0}>
						<Text fontSize="4xl" fontWeight="semibold" color={fontColor}>Manuel Martínez</Text>
						<Text fontSize="2xl" fontWeight="light" color={fontColor}>{content[lang].firstJobDesc}</Text>

					</Container>


			</Container>


			
		</>
	)
}

export default Homepage;
