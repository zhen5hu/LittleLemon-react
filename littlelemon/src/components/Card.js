import { Box, Heading, HStack, Image, Text} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, price}) => {
  const styles = {
    margin: '5%'
  }
  return (
    <>
        <Box bg= '#EDEFEE' borderRadius='1rem' width="18rem">
          <Image src={imageSrc} alt="images" borderRadius="1rem" width="100%"/>
          <HStack style={styles} justifyContent="space-between">
            <Heading fontSize="1rem">{title}</Heading>
            <Text color="#EE9972">{price}</Text>
          </HStack>
          <Text style={styles}>{description}</Text>
          <Text style={styles} textDecoration="underline"> Details <FontAwesomeIcon icon={faArrowRight} size="1x" /> </Text>
        </Box>
    </>
    );
};

export default Card;