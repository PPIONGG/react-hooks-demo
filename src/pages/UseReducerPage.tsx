import { useReducer } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Stack,
  Input,
} from "@chakra-ui/react";

// ========================== Reducer และ State ==========================

// State และ Action สำหรับ useReducer
type State = { count: number; input: string; list: string[] };
type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "set_input"; payload: string }
  | { type: "add_item" }
  | { type: "reset_list" };

// Reducer function ควบคุม State
const reducer = (state: State, action: Action): State => {
  console.log("State:", state, "Action:", action);

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "set_input":
      return { ...state, input: action.payload };
    case "add_item":
      return { ...state, list: [...state.list, state.input], input: "" };
    case "reset_list":
      return { ...state, list: [] };
    default:
      return state;
  }
};

// ========================== Main Component ==========================

const UseReducerPage = () => {
  // ใช้ useReducer
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    input: "",
    list: [],
  });

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
      <Heading as="h2" size="lg" color="teal.500" mb={4}>
        useReducer
      </Heading>

      {/* ระดับที่ 1: Counter */}
      <Box p={4} mb={6} bg="teal.50" borderRadius="md">
        <Text fontSize="lg" mb={4} fontWeight="bold" color="teal.600">
          Level 1: Simple Counter
        </Text>
        {/* useReducer */}
        <Text fontSize="2xl" mb={2}>
          useReducer Count:{" "}
          <Box as="span" color="teal.600" fontWeight="bold">
            {state.count}
          </Box>
        </Text>
        <Flex justify="center" gap={4} mb={4}>
          <Button
            colorScheme="teal"
            onClick={() => dispatch({ type: "increment" })}
          >
            Increment
          </Button>
          <Button
            colorScheme="red"
            onClick={() => dispatch({ type: "decrement" })}
          >
            Decrement
          </Button>
        </Flex>
      </Box>

      {/* ระดับที่ 2: Input และ Add List */}
      <Box p={4} mb={6} bg="blue.50" borderRadius="md">
        <Text fontSize="lg" mb={4} fontWeight="bold" color="blue.600">
          Level 2: Input and Add to List
        </Text>
        <Stack spacing={4}>
          <Input
            placeholder="Add item"
            value={state.input}
            onChange={(e) =>
              dispatch({ type: "set_input", payload: e.target.value })
            }
          />
          <Button
            colorScheme="blue"
            onClick={() => dispatch({ type: "add_item" })}
            isDisabled={!state.input}
          >
            Add to List
          </Button>
        </Stack>
        <Box mt={4} textAlign="left">
          <Text fontWeight="bold" mb={2}>
            List:
          </Text>
          {state.list.length > 0 ? (
            state.list.map((item, index) => (
              <Text key={index} color="blue.600">
                {index + 1}. {item}
              </Text>
            ))
          ) : (
            <Text color="gray.500">No items in the list</Text>
          )}
        </Box>
        <Button
          colorScheme="red"
          mt={4}
          onClick={() => dispatch({ type: "reset_list" })}
        >
          Reset List
        </Button>
      </Box>

      {/* ระดับที่ 3: ยาก - รวมทุกอย่าง */}
      <Box p={4} bg="orange.50" borderRadius="md">
        <Text fontSize="lg" mb={4} fontWeight="bold" color="orange.600">
          Level 3: Combine Counter and List Management
        </Text>
        <Text fontSize="lg" color="orange.600">
          Current Count: {state.count}
        </Text>
        <Text fontSize="lg" color="orange.600" mt={2}>
          List Length: {state.list.length}
        </Text>
      </Box>
    </Box>
  );
};

export default UseReducerPage;
