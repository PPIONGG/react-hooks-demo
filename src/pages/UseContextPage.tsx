import { useContext } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { ThemeContext } from "../context/ThemeProvider";

const UseContextPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={10}
      p={6}
      boxShadow="xl"
      borderRadius="lg"
      bg={theme === "light" ? "gray.100" : "gray.800"}
      color={theme === "light" ? "gray.800" : "gray.100"}
      textAlign="center"
    >
      <Heading as="h2" size="lg" mb={4}>
        useContext Example
      </Heading>
      <Text fontSize="xl" mb={6}>
        Current Theme:{" "}
        <Text as="span" fontWeight="bold" color={theme === "light" ? "teal.500" : "orange.400"}>
          {theme}
        </Text>
      </Text>
      <Button
        onClick={toggleTheme}
        colorScheme={theme === "light" ? "teal" : "orange"}
        size="md"
      >
        Toggle Theme
      </Button>
    </Box>
  );
};

export default UseContextPage;
