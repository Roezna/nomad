import { Box, Heading, Highlight } from "@chakra-ui/react";

interface Props {
  content: string;
  highlight?: string;
}

const Phrase = (props: Props) => {
  const { content, highlight } = props;

  return (
    <Box p={["10em 1em", "7em", "7em"]} width="100%" display={"flex"}>
      <Heading
        as={"h5"}
        fontWeight={"thin"}
        size={["2xl", "3xl", "4xl"]}
        lineHeight={["1.3", "1.4", "1.5"]}
        textAlign={"center"}
      >
        <Highlight
          query={`${highlight}`}
          styles={{
            bg: "urban",
            color: "white",
            fontWeight: "600",
            padding: ["0 0.2em"],
          }}
        >
          {`${content}`}
        </Highlight>
      </Heading>
    </Box>
  );
};

export default Phrase;
