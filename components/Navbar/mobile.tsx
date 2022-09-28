import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Links } from "../../shared/types";
import IconCustom from "../Icons";

interface Props {
  links: Links[];
  onOpen: () => void;
}

const Mobile = (props: Props) => {
  const { links, onOpen } = props;
  const [display, setDisplay] = useState(false);

  return (
    <>
      <Box
        display={["flex", "flex", "none"]}
        width={"fit-content"}
        flexWrap={"nowrap"}
        alignItems={"center"}
      >
        <Box p={3} display={"flex"}>
          <Button
            p={"1em"}
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
        <Button
          display={["flex", "flex", "none"]}
          onClick={() => setDisplay(true)}
        >
          <IconCustom name={"list"} boxSize={"2em"} />
        </Button>
      </Box>
      <Drawer
        isOpen={display}
        placement="right"
        onClose={() => setDisplay(false)}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={40} fontFamily={"canada-type-gibson"}>
            <IconCustom
              name={"nomad"}
              fontSize={"2em"}
              height={"fit-content"}
            />
          </DrawerHeader>
          <DrawerBody>
            <Box display={"flex"} flexDirection={"column"}>
              {links?.map((link: Links) => {
                return link.name !== "Experimenta" ? (
                  <Link
                    href={link.source}
                    key={link.name}
                    fontSize={"2em"}
                    fontWeight={600}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left" marginLeft={-4}>
                          <Text fontSize={"2em"} fontWeight={600}>
                            {link.name}
                          </Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel
                        pb={4}
                        display={"flex"}
                        flexDirection={"column"}
                      >
                        {link?.items?.map((item) => {
                          return (
                            <Link
                              key={item.name}
                              href={item.source}
                              fontSize={"2em"}
                              fontWeight={600}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                );
              })}
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <Box
              p={3}
              display={"flex"}
              width={"100%"}
              justifyContent={"center"}
            >
              <Button
                p={"1.5em"}
                borderRadius={10}
                bg={"urban"}
                color={"white"}
                fontSize={"1.2em"}
                display="flex"
                width={"75%"}
                alignItems="center"
                onClick={() => onOpen()}
                _hover={{ bg: "urban" }}
              >
                <IconCustom
                  name={"calendar"}
                  fill={"white"}
                  boxSize={"1.5em"}
                />
                <Text fontWeight={"600"} marginLeft={"0.5em"}>
                  {" "}
                  Reservar
                </Text>
              </Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Mobile;
