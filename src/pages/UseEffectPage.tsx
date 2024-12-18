import { useState, useEffect } from "react";
import { Box, Heading, Text, Button, Flex, Spinner, Stack } from "@chakra-ui/react";

const UseEffectPage = () => {
  const [count, setCount] = useState(0); // State สำหรับนับจำนวน
  const [data, setData] = useState<string | null>(null); // State สำหรับข้อมูล API
  const [time, setTime] = useState(10); // State สำหรับ Timer
  const [isRunning, setIsRunning] = useState(false); // State ควบคุม Timer

  /** ==================== ระดับที่ 1: ง่าย ==================== **/
  // เปลี่ยน Title เมื่อ count เปลี่ยนค่า
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  /** ==================== ระดับที่ 2: กลาง ==================== **/
  // Fetch API เมื่อโหลด Component
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const json = await response.json();
      setData(json.title);
    };
    fetchData();
  }, []);

  /** ==================== ระดับที่ 3: ยาก ==================== **/
  // ทำงานร่วมกับ Timer (นับถอยหลัง) และ Cleanup Function
  useEffect(() => {
    let timer: number;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    // Cleanup Timer เมื่อหยุดทำงาน
    return () => clearInterval(timer);
  }, [isRunning, time]);

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} boxShadow="xl" borderRadius="lg" bg="gray.50">
      <Heading as="h2" size="lg" textAlign="center" color="teal.500" mb={4}>
        useEffect Examples
      </Heading>

      {/* ระดับที่ 1: ง่าย */}
      <Box mb={6} p={4} bg="teal.50" borderRadius="md">
        <Text fontSize="lg" mb={2} fontWeight="bold" color="teal.600">
          Level 1: Change Document Title
        </Text>
        <Text>Count: <Box as="span" fontWeight="bold">{count}</Box></Text>
        <Flex justifyContent="center" gap={4} mt={2}>
          <Button colorScheme="teal" size="sm" onClick={() => setCount(count + 1)}>Increment</Button>
          <Button colorScheme="red" size="sm" onClick={() => setCount(0)}>Reset</Button>
        </Flex>
      </Box>

      {/* ระดับที่ 2: กลาง */}
      <Box mb={6} p={4} bg="blue.50" borderRadius="md">
        <Text fontSize="lg" mb={2} fontWeight="bold" color="blue.600">
          Level 2: Fetch API Data
        </Text>
        {data ? (
          <Text>Fetched Data: <Box as="span" fontWeight="bold">{data}</Box></Text>
        ) : (
          <Spinner color="blue.500" />
        )}
      </Box>

      {/* ระดับที่ 3: ยาก */}
      <Box p={4} bg="orange.50" borderRadius="md">
        <Text fontSize="lg" mb={2} fontWeight="bold" color="orange.600">
          Level 3: Countdown Timer with Cleanup
        </Text>
        <Text>Time: <Box as="span" fontWeight="bold">{time} seconds</Box></Text>
        <Stack direction="row" justifyContent="center" gap={4} mt={2}>
          <Button
            colorScheme="orange"
            size="sm"
            onClick={() => setIsRunning(true)}
            isDisabled={isRunning}
          >
            Start
          </Button>
          <Button colorScheme="red" size="sm" onClick={() => setIsRunning(false)}>
            Pause
          </Button>
          <Button
            colorScheme="gray"
            size="sm"
            onClick={() => {
              setTime(10);
              setIsRunning(false);
            }}
          >
            Reset
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default UseEffectPage;
