import { Box, HStack, Image, Text} from "@chakra-ui/react";
import React from "react";
import star from '../images/star.jpg';


const Review = ({name, photo, review}) => {
  const styles = {
    margin: '3%'
  }
  return (
    <>
      <Box bg= '#EDEFEE' borderRadius='0.5rem' width='20%'>
          <Image src={star} alt="stars" width="8%" marginTop="5%"></Image>
          <Image src={star} alt="stars" width="8%"></Image>
          <Image src={star} alt="stars" width="8%"></Image>
          <Image src={star} alt="stars" width="8%"></Image>
          <Image src={star} alt="stars" width="8%"></Image>
          <HStack style={styles} justifyContent='flex-start'>
              <Image src={photo} alt="images" borderRadius="1rem" width="30%"/>
              <h3>{name}</h3>
          </HStack>
          <Text style={styles}>{review}</Text>
      </Box>
    </>
    );
};

export default Review;