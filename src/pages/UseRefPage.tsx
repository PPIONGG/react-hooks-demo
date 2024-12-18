import { useState, useRef } from "react";
import { Box, Button, Heading, Text, Stack, Input } from "@chakra-ui/react";

const UseRefPage = () => {
  // Focus Input Example
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Render Count Example
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  renderCount.current += 1;

  // Timer Example
  const [time, setTime] = useState(10);
  const timerRef = useRef<number | null>(null);

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = window.setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : prev));
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(10);
  };

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
        useRef Examples
      </Heading>

      {/* Section 1: Focus Input */}
      <Box p={4} mb={6} bg="teal.50" borderRadius="md">
        <Text fontSize="lg" mb={4} fontWeight="bold" color="teal.600">
          Example 1: Focus Input
        </Text>
        <Stack spacing={4}>
          <Input ref={inputRef} placeholder="Click the button to focus me" />
          <Button colorScheme="teal" onClick={handleFocus}>
            Focus Input
          </Button>
        </Stack>
      </Box>

      {/* Section 2: Render Count */}
      <Box p={4} mb={6} bg="blue.50" borderRadius="md">
        <Text fontSize="lg" mb={4} fontWeight="bold" color="blue.600">
          Example 2: Render Count
        </Text>
        <Text fontSize="2xl" mb={4}>
          Count: <Box as="span" color="blue.600" fontWeight="bold">{count}</Box>
        </Text>
        <Text fontSize="md" color="gray.600" mb={4}>
          Component rendered <Box as="span" fontWeight="bold">{renderCount.current}</Box> times
        </Text>
        <Stack spacing={4} direction="row" justify="center">
          <Button colorScheme="blue" onClick={() => setCount((prev) => prev + 1)}>
            Increment
          </Button>
          <Button colorScheme="red" onClick={() => setCount(0)}>
            Reset
          </Button>
        </Stack>
      </Box>

      {/* Section 3: Timer */}
      <Box p={4} bg="orange.50" borderRadius="md">
        <Text fontSize="lg" mb={4} fontWeight="bold" color="orange.600">
          Example 3: Timer
        </Text>
        <Text fontSize="2xl" mb={4}>
          Time Remaining: <Box as="span" color="orange.600" fontWeight="bold">{time}s</Box>
        </Text>
        <Stack spacing={4} direction="row" justify="center">
          <Button colorScheme="teal" onClick={startTimer}>
            Start
          </Button>
          <Button colorScheme="red" onClick={stopTimer}>
            Stop
          </Button>
          <Button colorScheme="gray" onClick={resetTimer}>
            Reset
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default UseRefPage;
