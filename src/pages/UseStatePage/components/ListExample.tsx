import { Stack, Input, Button, Flex , Text} from "@chakra-ui/react";
import { useState } from "react";

export const ListExample = () => {
    const [items, setItems] = useState<string[]>([]);
    const [input, setInput] = useState("");
  
    const addItem = () => {
      if (input) setItems([...items, input]);
      setInput("");
    };
  
    return (
      <Stack spacing={4}>
        <Input
          placeholder="Add Item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button colorScheme="teal" onClick={addItem}>
          Add Item
        </Button>
        {items.map((item, index) => (
          <Flex key={index} justify="space-between" align="center">
            <Text>{item}</Text>
            <Button
              size="sm"
              colorScheme="red"
              onClick={() => setItems(items.filter((_, i) => i !== index))}
            >
              Remove
            </Button>
          </Flex>
        ))}
      </Stack>
    );
  };