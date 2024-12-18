import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="calc(100vh - 64px)"
      textAlign="center"
      bg="gray.50"
    >
      <Heading as="h1" size="4xl" color="teal.500">
        404
      </Heading>
      <Text fontSize="2xl" mt={4} mb={6} color="gray.600">
        Oops! The page you are looking for does not exist.
      </Text>
      <Button
        colorScheme="teal"
        size="lg"
        onClick={() => navigate("/")}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
