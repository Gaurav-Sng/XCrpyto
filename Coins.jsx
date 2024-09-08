import { server } from "../main";
import Loader from "./Loader";
import { useState, useEffect } from "react";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import axios from "axios";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns = new Array(132).fill(1); // Ensure this matches your pagination logic

  function changePage(page) {
    setPage(page);
    setLoading(true);
  }

  useEffect(() => {
    const fetchCoins = async () => {
      try {
         const response = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`, {
          params: {
            vs_currency: currency,
            page: page, // Use the correct parameter name for pagination
          },
        });

        const data = response.data;

        // Assuming the API response is an array
        const exchangesArray = Array.isArray(data) ? data : Object.values(data);

        console.log("Exchanges Array:", exchangesArray); // For debugging purposes
        setCoin(exchangesArray);
        console.log(coins);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchCoins();
  }, [currency, page, coins]);

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={'4'}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"eur"}>EUR</Radio>
              <Radio value={"usd"}>USD</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={'center'}>
            {coins.map((exchange) => (
              <CoinCard
                key={exchange.id} 
                id={exchange.id}
                // Ensure `exchange.id` is unique
                name={exchange.name}
                symbol={exchange.symbol}
                imageurl={exchange.image}
                price={exchange.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack overflowX={"auto"} margin={"4"} width={"full"}>
            {btns.map((_, index) => (
              <Button
                key={index} // Use index as key if `btns` is a simple array
                color={"white"}
                bgColor={"blackAlpha.900"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
