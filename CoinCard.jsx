import { VStack, Image, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CoinCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id,key, name, symbol, imageurl ,price,currencySymbol=" ₹"} = props;
  //console.log(name);
  return (
    <Link to={`/coin/${id}`} >
      <VStack
        w={"52"}
        p={"8"}
        shadow={"lg"}
        borderRadius={"lg"}
        transition={"all 0.3sec"}
        m={"4"}
        __css={{ "&:hover": { transform: "scale(1.1)" } }}
      >
        <Image
          src={imageurl}
          h={"10"}
          objectFit={"contain"}
          alt="cryptoimages"
        />

        <Heading size={"md"} noOfLines={1}>
         {symbol}
        </Heading>
        <Text key={key} noOfLines={1}>
          {name}
        </Text>
        <Text  noOfLines={1}>
          {price?`${currencySymbol}${price}`:"NA."}
        </Text>
      </VStack>
   </Link>
  );
};

CoinCard.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  imageurl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CoinCard;
