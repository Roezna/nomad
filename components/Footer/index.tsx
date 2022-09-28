import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Show,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import type { NextPage } from "next";
import { useQuery } from "react-query";
import React from "react";
import IconCustom from "../Icons";
import Link from "next/link";
import { Links } from "../../shared/types";

const Footer: NextPage = () => {
  const fetchData = async () => {
    const getData = await axios("/api/footer");
    return getData.data;
  };
  const { data } = useQuery("footer", fetchData);

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box
        display={"flex"}
        justifyContent={["center", "space-around", "space-between"]}
        flexDirection={["column", "column", "row"]}
        alignItems={["center", "center", "flex-start"]}
        padding={["4em 1em", "4em"]}
        flexWrap={"wrap"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={["center", "center", "start"]}
          width={300}
        >
          <IconCustom name={"nomad"} fontSize={"7em"} height={"fit-conntent"} />
          <Text
            margin={"1em 0"}
            fontSize={"15px"}
            align={["center", "center", "start"]}
          >
            {data?.textSEO}
          </Text>
          <Box display={"flex"}>
            <Breadcrumb separator={""}>
              {data?.socialMedia.map((item: Links) => {
                return (
                  <BreadcrumbItem key={item.name}>
                    <BreadcrumbLink key={item.name} href={`/${item.source}`}>
                      {<IconCustom name={item.name} boxSize={"1.5em"} />}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                );
              })}
            </Breadcrumb>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={245}
          margin={["3em 0 0 0", "3em 0 0 0", 0]}
        >
          <Text fontWeight={"semibold"} fontSize={"1.5em"}>
            Contacta con nosotros
          </Text>
          <Text>T: {data?.phoneNumber}</Text>
          <Text>E: {data?.email}</Text>
        </Box>
        <Show above="md">
          <Box display={"flex"} flexDirection={"column"} width={100}>
            {data?.links?.map((link: Links) => {
              return (
                <Link key={link.name} href={link.source}>
                  {link.name}
                </Link>
              );
            })}
          </Box>
        </Show>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bgColor={"urban"}
        height={["100px", "150px", "195px"]}
      >
        <Text
          color={"white"}
          fontSize={["2.5em", "3.5em", "4.5em"]}
          letterSpacing={[-2, -3, -4]}
          fontWeight={300}
        >
          {data?.phrase?.content}
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
