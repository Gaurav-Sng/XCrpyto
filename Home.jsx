// eslint-disable-next-line no-unused-vars
import { Box, Image, Text } from '@chakra-ui/react';
import Crypto from '../assets/image.png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
   <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'} >
    <motion.div
    style={{
      height:'80vh',
    }}
    animate={{
      translateY:'20px'
    }}
    transition={{
      duration:2,
      repeat:Infinity,
      repeatType:"reverse",
    }}>
   <Image w={'full'} h={'full'} objectFit={'contain'} src={Crypto} ></Image>
   </motion.div>
   </Box>
  )
}

export default Home;