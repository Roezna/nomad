import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";
import { Hotel, Service } from "../../shared/types";
import IconCustom from "../Icons";

interface Props {
  open: boolean;
  close: () => void;
}

const ReserveDrawer = (props: Props) => {
  const { open, close } = props;
  const fetchHotelAvailability = async () => {
    const getHotel = await axios("/api/hotels/availability");
    return getHotel.data;
  };
  const { data, isLoading } = useQuery(
    "hotelsAvailability",
    fetchHotelAvailability
  );

  return isLoading ? (
    <Spinner />
  ) : (
    <Drawer isOpen={open} placement="right" onClose={close} size={"lg"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontSize={40} fontFamily={"canada-type-gibson"}>
          Reservar
        </DrawerHeader>
        <DrawerBody
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          {data?.map((hotel: Hotel) => {
            return (
              <>
                <Box
                  display={"flex"}
                  flexDirection={["column", "row"]}
                  alignItems={["flex-start", "auto"]}
                  key={hotel.title}
                  width={[327, "100%"]}
                  margin={"2em 0"}
                >
                  <Box width={[327, 250]} margin={["0 0 1em 0", "0 2em 0 0"]}>
                    <Image
                      src={`/static/${hotel.image?.drawer}`}
                      width={[327, 250]}
                      height={[200, 262]}
                      objectFit={"cover"}
                      borderRadius={10}
                      alt={hotel.title}
                    />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} width={350}>
                    <IconCustom
                      name={hotel.title}
                      height={"fit-content"}
                      fontSize={hotel.title === "urban" ? "7em" : "5em"}
                    />
                    <Text
                      margin={"1em 0"}
                      fontFamily={"Montserrat"}
                      fontSize={15}
                      lineHeight={"24px"}
                      letterSpacing={"0.04em"}
                    >
                      {hotel.description}
                    </Text>
                    <Text
                      fontFamily={"Montserrat"}
                      fontSize={13}
                      lineHeight={"20px"}
                      color={"graniteGray"}
                    >
                      {hotel?.services?.map(
                        (service: Service) => service.name + " · "
                      )}
                    </Text>
                    <Box
                      display={"flex"}
                      fontFamily={"Montserrat"}
                      margin={"1em 0"}
                      fontSize={15}
                      letterSpacing={"0.04em"}
                    >
                      <Text color={"graniteGray"} marginRight={1}>
                        Desde
                      </Text>
                      <Text fontWeight={900} color={"black"}>
                        {"$" + hotel.priceNightFrom + "/Noche"}
                      </Text>
                    </Box>
                    <Button
                      bg={"urban"}
                      color={"white"}
                      _hover={{ bg: "black" }}
                      w={[327, 137]}
                      p={6}
                    >
                      Reservar Ahora
                    </Button>
                  </Box>
                </Box>
                <Divider />
              </>
            );
          })}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default ReserveDrawer;
