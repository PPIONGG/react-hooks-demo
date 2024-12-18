import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { CounterExample } from "./components/CounterExample";
import { FormExample } from "./components/FormExample";
import { ToggleExample } from "./components/ToggleExample";
import { ListExample } from "./components/ListExample";
import { CountdownExample } from "./components/CountdownExample";

const UseStatePage = () => {
  return (
    <Box
      maxW="md"
      mx="auto"
      mt={10}
      p={5}
      boxShadow="md"
      borderRadius="lg"
      bg="gray.50"
    >
      <Heading as="h2" size="lg" mb={4} textAlign="center" color="teal.500">
        useState Examples
      </Heading>
      {/* Tabs */}
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Counter</Tab>
          <Tab>Form</Tab>
          <Tab>Toggle</Tab>
          <Tab>List</Tab>
          <Tab>Countdown</Tab>
        </TabList>

        <TabPanels>
          {/* 1. Counter */}
          <TabPanel>
            <CounterExample />
          </TabPanel>

          {/* 2. Form */}
          <TabPanel>
            <FormExample />
          </TabPanel>

          {/* 3. Toggle */}
          <TabPanel>
            <ToggleExample />
          </TabPanel>

          {/* 4. List */}
          <TabPanel>
            <ListExample />
          </TabPanel>

          {/* 5. Countdown */}
          <TabPanel>
            <CountdownExample />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default UseStatePage;
