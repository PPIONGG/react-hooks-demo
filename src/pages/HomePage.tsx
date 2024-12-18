import { Box, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      maxW="xl"
      mx="auto"
      mt={10}
      p={6}
      boxShadow="lg"
      borderRadius="md"
      bg="gray.50"
    >
      <Heading as="h1" size="xl" textAlign="center" color="teal.600" mb={6}>
        React Hooks Demo
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate("/use-state")}
        >
          useState
        </Button>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate("/use-effect")}
        >
          useEffect
        </Button>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate("/use-reducer")}
        >
          useReducer
        </Button>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate("/use-context")}
        >
          useContext
        </Button>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate("/use-ref")}
        >
          useRef
        </Button>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate("/use-memo")}
        >
          useMemo
        </Button>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate("/use-callback")}
        >
          useCallback
        </Button>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate("/use-custom-hook")}
        >
          Custom Hook
        </Button>
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;
