import { Box, Divider, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Hotel, Service } from "../../shared/types";
import IconCustom from "../Icons";

interface Props {
  hotels: Hotel[];
}

const HotelBox = (props: Props) => {
  const { hotels } = props;

  const [details, setDetails] = useState("");

  return (
    <>
      {hotels.map((hotel, index) => {
        return (
          <Box
            key={index}
            flex={["0 0 347px", "0 0 642px", "0 0 642px"]}
            height={[400, 432, 432]}
            borderRadius={16}
            backgroundImage={`url(/static/${hotel.image?.landing})`}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            margin={["1em 0", "0 0 0 6em", "0 0 0 6em"]}
            position={"relative"}
          >
            <Box
              flexDirection={"column"}
              display={"flex"}
              position={"absolute"}
              justifyContent={"center"}
              bottom={[5, 20, 20]}
              padding={["1em", "1.5em", "1.5em"]}
              borderRadius={32}
              right={[0, -5, -5]}
              margin={["0 auto", "auto", "auto"]}
              left={[0, "auto", "auto"]}
              width={["90%", 356, 356]}
              onMouseEnter={() => setDetails(hotel.title)}
              onMouseLeave={() => setDetails("")}
              bgColor={details === hotel.title ? "none" : hotel.mainColor}
              backdropFilter={"blur(10px) brightness(40%)"}
            >
              <Box display={"flex"} alignItems={"center"} margin={"0.5em 0"}>
                <IconCustom name={"location"} fill={"white"} />
                <Text color={"white"}>{hotel.location}</Text>
              </Box>
              <IconCustom
                name={hotel.title}
                fontSize={hotel.title === "urban" ? "14em" : "8em"}
                fill={"white"}
                height={"fit-content"}
              />
              {details === hotel.title && (
                <>
                  <Text margin={"1em 0 0 0"} color={"white"}>
                    {hotel.description}
                  </Text>
                  <Divider margin={"1em 0"} colorScheme={hotel.mainColor} />
                  <Text color={"white"}>Servicios de este hotel</Text>
                  <Box display={"flex"} flexWrap={"wrap"} margin={"1em 0 0 0"}>
                    {hotel.services?.map((service: Service) => {
                      return (
                        <Box key={service.name} margin={"0 0.5em"}>
                          <IconCustom
                            name={service.reference}
                            fill={"white"}
                            fontSize={"2em"}
                          />
                        </Box>
                      );
                    })}
                  </Box>
                </>
              )}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default HotelBox;
