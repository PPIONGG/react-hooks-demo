import { Stack, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

export const CounterExample = () => {
  const [count, setCount] = useState(0);
  return (
    <Stack spacing={4} align="center">
      <Text fontSize="xl">Count: {count}</Text>
      <Stack direction="row" spacing={4}>
        <Button colorScheme="teal" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
        <Button colorScheme="red" onClick={() => setCount(count - 1)}>
          Decrement
        </Button>
      </Stack>
    </Stack>
  );
};
