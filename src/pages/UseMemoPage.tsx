import { useState, useMemo } from "react";
import { Box, Heading, Text, Input, Stack, Button } from "@chakra-ui/react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // UseMemo Example: Expensive Calculation
  const expensiveCalculation = (num : number) => {
    console.log("Running expensive calculation...");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += num;
    }
    return total;
  };

  // Memoized Value
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);
//   const memoizedValue = expensiveCalculation(count);

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
      <Heading as="h2" size="lg" color="teal.500" mb={6}>
        useMemo Example
      </Heading>

      {/* Input Example */}
      <Stack spacing={4} mb={6}>
        <Input
          placeholder="Type something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Text fontSize="lg" color="gray.600">
          Input Value: {input}
        </Text>
      </Stack>

      {/* Expensive Calculation Example */}
      <Text fontSize="xl" mb={4}>
        Count: <Box as="span" color="teal.600" fontWeight="bold">{count}</Box>
      </Text>
      <Text fontSize="lg" mb={4} color="blue.600">
        Memoized Value: {memoizedValue}
      </Text>
      <Stack spacing={4} direction="row" justify="center">
        <Button colorScheme="teal" onClick={() => setCount((prev) => prev + 1)}>
          Increment Count
        </Button>
        <Button colorScheme="red" onClick={() => setCount(0)}>
          Reset Count
        </Button>
      </Stack>
    </Box>
  );
};

export default UseMemoExample;
