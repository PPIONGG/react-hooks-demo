import { Stack, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

export const ToggleExample = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <Stack spacing={4} align="center">
      <Text fontSize="xl">Status: {isOn ? "ON" : "OFF"}</Text>
      <Button colorScheme={isOn ? "green" : "red"} onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn Off" : "Turn On"}
      </Button>
    </Stack>
  );
};