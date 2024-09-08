import { VStack, Image, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ExchangeCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { key, name, rank, imageurl,url } = props;
  console.log(name);
  return (
    <a href={url} target={"blank"}>
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
          {rank}
        </Heading>
        <Text key={key} noOfLines={1}>
          {name}
        </Text>
      </VStack>
    </a>
  );
};
ExchangeCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageurl: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default ExchangeCard;
