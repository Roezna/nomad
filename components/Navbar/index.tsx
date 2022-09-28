import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import type { NextPage } from "next";
import { useState } from "react";
import { useQuery } from "react-query";
import { Links } from "../../shared/types";
import IconCustom from "../Icons";
import ReserveDrawer from "./drawer";
import Mobile from "./mobile";

const Navbar: NextPage = () => {
  const fetchLinks = async () => {
    const getLinks = await axios("/api/nav");
    return getLinks.data;
  };
  const { data } = useQuery("nav", fetchLinks);
  const [dropdown, setDropdown] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      display="flex"
      justifyContent={["space-between"]}
      flexDirection={"row"}
      alignItems="center"
      width={"100%"}
    >
      <Image
        src={"/logo.png"}
        alt={"logo"}
        width={["103px", "103px", "160px"]}
        height={["44px", "44px", "80px"]}
      />
      <Box
        display={["none", "none", "flex"]}
        bg={"white"}
        borderRadius={15}
        alignItems={"center"}
      >
        <Breadcrumb separator={" "}>
          {data?.map((link: Links) => {
            return (
              <BreadcrumbItem
                key={link.name}
                flexDirection={link.name === "Experimenta" ? "column" : "row"}
                margin={"0 1em"}
                p={"1em 0"}
                onMouseEnter={() =>
                  link.name === "Experimenta" && setDropdown(true)
                }
                onMouseLeave={() =>
                  link.name === "Experimenta" && setDropdown(false)
                }
              >
                <BreadcrumbLink
                  href={`${link.source}`}
                  p={3}
                  borderRadius={10}
                  bg={link.name === "Reservar" ? "urban" : "white"}
                  color={"black"}
                  display="flex"
                  alignItems="center"
                >
                  <Text fontWeight={"normal"}>{link.name}</Text>
                </BreadcrumbLink>
                {dropdown && (
                  <Box
                    position={"absolute"}
                    margin={"4em 0"}
                    borderRadius={"0 0 1em 1em"}
                    bg={"white"}
                    onMouseEnter={() =>
                      link.name === "Experimenta" && setDropdown(true)
                    }
                  >
                    {link?.items?.map((subitem: Links) => {
                      return (
                        <Breadcrumb
                          key={subitem.name}
                          p={"0.5em 2.5em"}
                          display={"flex"}
                          flexDirection="column"
                        >
                          <BreadcrumbItem key={subitem.name} margin={"0.5em 0"}>
                            <BreadcrumbLink href={`${subitem.source}`}>
                              {subitem.name}
                            </BreadcrumbLink>
                          </BreadcrumbItem>
                        </Breadcrumb>
                      );
                    })}
                  </Box>
                )}
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
        <Box p={3}>
          <Button
            p={"2em 1em"}
            borderRadius={10}
            bg={"urban"}
            color={"white"}
            display="flex"
            alignItems="center"
            onClick={() => onOpen()}
            _hover={{ bg: "urban" }}
          >
            <IconCustom name={"calendar"} fill={"white"} boxSize={"1.5em"} />
            <Text fontWeight={"600"} marginLeft={"0.5em"}>
              {" "}
              Reservar
            </Text>
          </Button>
        </Box>
      </Box>
      <Mobile onOpen={onOpen} links={data} />
      {isOpen && <ReserveDrawer open={isOpen} close={onClose} />}
    </Box>
  );
};

export default Navbar;
