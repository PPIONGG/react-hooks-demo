import { useState, useCallback } from "react";
import { Box, Button, Text, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const UseCallbackComparison = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // Memoized function to increment the count
  const increment = useCallback(() => {
    console.log("Increment called");
    setCount((prev) => prev + 1);
  }, []);

  return (
    <Box
      maxW="lg"
      mx="auto"
      mt={10}
      p={6}
      boxShadow="xl"
      borderRadius="lg"
      bg="gray.50"
      textAlign="center"
    >
      <Heading as="h1" size="lg" mb={6} color="teal.500">
        useCallback Example
      </Heading>

      <Text fontSize="2xl" mb={6}>
        Count:{" "}
        <Text as="span" color="teal.600" fontWeight="bold">
          {count2}
        </Text>
      </Text>

      <Stack spacing={4} direction="row" justify="center" mb={6}>
        <Button colorScheme="teal" onClick={() => setCount2(count2 + 1)}>
          count2
        </Button>
        <Button colorScheme="teal" onClick={() => setCount(count + 1)}>
          count1
        </Button>
      </Stack>

      {/* Pass the memoized function to the Child Component */}
      <Child onIncrement={increment} count={count} />
      </Box>
  );
};
export default UseCallbackComparison;

// Child Component wrapped with React.memo
const Child = React.memo(
    ({ onIncrement, count }: { onIncrement: () => void; count: number }) => {
      console.log("Child Rendered");
  
      return (
        <Box
          border="1px solid teal"
          borderRadius="md"
          p={4}
          bg="blue.50"
          mt={6}
          textAlign="center"
        >
          <Text fontSize="lg" mb={4} color="blue.600">
            Child Component
          </Text>
          <Text fontSize="xl" color="blue.700" mb={4}>
            Count from Parent: {count}
          </Text>
          <Button colorScheme="blue" onClick={onIncrement}>
            Child Increment
          </Button>
        </Box>
      );
    }
  );
  
