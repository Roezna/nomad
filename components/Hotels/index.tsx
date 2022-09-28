import { Box, Heading, Show, Text } from "@chakra-ui/react";
import { Hotel } from "../../shared/types";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import HotelBox from "./HotelBox";
interface Props {
  hotels: Hotel[];
  title: string;
  description: string;
}

const HotelsLanding = (props: Props) => {
  const { hotels, title, description } = props;
  const [emblaRef] = useEmblaCarousel(
    {
      slidesToScroll: "auto",
      loop: true,
      align: "start",
    },
    [Autoplay()]
  );

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgGradient={[
        "auto",
        "linear(to-r, cultured 80%, white 20%)",
        "linear(to-r, cultured 80%, white 20%)",
      ]}
      bgColor={["cultured", "auto", "auto"]}
      padding={["1em", "3em 1em 3em 3em", "3em 1em 3em 3em"]}
    >
      <Box display={"flex"} flexDirection={"column"} width={["100%", 550, 550]}>
        <Heading
          fontSize={48}
          fontWeight={600}
          lineHeight={"56px"}
          marginBottom={5}
        >
          {title}
        </Heading>
        <Text fontSize={20} fontWeight={300} color={"black"}>
          {description}
        </Text>
      </Box>
      {hotels && (
        <>
          <Show above="sm">
            <Box ref={emblaRef} overflow={"hidden"} margin={"3em 0 0 0"}>
              <Box display={"flex"}>{<HotelBox hotels={hotels} />}</Box>
            </Box>
          </Show>
          <Show below="sm">
            <Box display={"flex"} flexDirection={"column"}>
              <HotelBox hotels={hotels} />
            </Box>
          </Show>
        </>
      )}
    </Box>
  );
};

export default HotelsLanding;
