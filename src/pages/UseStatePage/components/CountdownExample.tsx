import { Stack, Button, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const CountdownExample = () => {
    const [time, setTime] = useState(10);
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
      let timer: number;
      
      if (isRunning && time > 0) {
        timer = setInterval(() => setTime((prev) => prev - 1), 1000);
      }
      return () => clearInterval(timer);
    }, [isRunning, time]);
  
    return (
      <Stack spacing={4} align="center">
        <Text fontSize="xl">Time: {time} seconds</Text>
        <Stack direction="row" spacing={4}>
          <Button
            colorScheme="teal"
            onClick={() => setIsRunning(true)}
            isDisabled={isRunning}
          >
            Start
          </Button>
          <Button colorScheme="red" onClick={() => setIsRunning(false)}>
            Pause
          </Button>
          <Button
            colorScheme="gray"
            onClick={() => {
              setTime(10);
              setIsRunning(false);
            }}
          >
            Reset
          </Button>
        </Stack>
      </Stack>
    );
  };