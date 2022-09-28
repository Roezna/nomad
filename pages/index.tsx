import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import type { NextPage } from "next";
import { useQuery } from "react-query";
import HotelsLanding from "../components/Hotels";
import IconCustom from "../components/Icons";
import Navbar from "../components/Navbar";
import Phrase from "../components/Phrase";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const fetchContent = async () => {
    const getHomeContent = await axios("/api/home");
    return getHomeContent.data;
  };
  const { data } = useQuery("home", fetchContent);

  return (
    <Box>
      <Box
        backgroundImage={["url(/heroMobile.png)", "url(/hero.png)"]}
        backgroundRepeat="no-repeat"
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        width={"100%"}
        height={"100vh"}
        objectFit={"cover"}
        display={"flex"}
        padding={["1em 1em", "2em 3em"]}
        flexDirection={"column"}
      >
        <Navbar />
        <Box
          height={"100%"}
          alignItems={"center"}
          display={"flex"}
          width={[340, 440, 600]}
        >
          <Heading
            fontWeight={"bold"}
            as={"h1"}
            fontSize={[70, 90, 130]}
            color={"white"}
          >
            {data?.heroText}
          </Heading>
        </Box>
      </Box>

      <Phrase
        content={data?.phrase.content}
        highlight={data?.phrase.highlight}
      />
      <HotelsLanding
        title={data?.hotels?.title}
        description={data?.hotels?.description}
        hotels={data?.hotels?.hotelsToShow}
      />
      <Box display={"flex"} width={"80%"} margin="4em auto 0 auto">
        <IconCustom name={"divisor"} boxSize={"100%"} />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
