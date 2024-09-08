import  { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  HStack,
} from "@chakra-ui/react";
import { server } from "../main";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const response = await axios.get(`${server}/exchanges`);
        console.log("API Response:", response); // For debugging purposes

        // Assuming response.data is in the expected format
        const data = response.data;

        // If the data is an object with nested items
        const exchangesArray = Array.isArray(data) ? data : Object.values(data);
        console.log("Exchanges Array:", exchangesArray); // For debugging purposes

        setExchanges(exchangesArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <HStack wrap={"wrap"}>
          {exchanges.map((exchange) => (
            <ExchangeCard
              key={exchange.id} // Unique key for each card
              name={exchange.name}
              url={exchange.url}
              imageurl={exchange.image}
              rank={exchange.trust_score_rank}
            />
          ))}
        </HStack>
      )}
    </Container>
  );
};

export default Exchanges;
