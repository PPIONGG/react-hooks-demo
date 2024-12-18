import { Flex, Box, Link, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Title */}
        <Link
          as={RouterLink}
          to="/"
          color="white"
          fontWeight="bold"
          fontSize="lg"
          _hover={{ textDecoration: "none", color: "teal.200" }}
        >
          React Hooks Example
        </Link>

        {/* Links */}
        <Flex alignItems="center">
          <Link
            as={RouterLink}
            to="/use-state"
            px={3}
            py={2}
            color="white"
            borderRadius="md"
            _hover={{ textDecoration: "none", bg: "teal.600", borderRadius: "md" }}
          >
            useState
          </Link>
          <Link
            as={RouterLink}
            to="/use-effect"
            px={3}
            py={2}
            color="white"
            borderRadius="md"
            _hover={{ textDecoration: "none", bg: "teal.600", borderRadius: "md" }}
          >
            useEffect
          </Link>

          {/* Dropdown Menu */}
          <Menu>
            <MenuButton as={Button} colorScheme="teal" rightIcon={<ChevronDownIcon />}>
              More Hooks
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/use-reducer">
                useReducer
              </MenuItem>
              <MenuItem as={RouterLink} to="/use-context">
                useContext
              </MenuItem>
              <MenuItem as={RouterLink} to="/use-ref">
                useRef
              </MenuItem>
              <MenuItem as={RouterLink} to="/use-memo">
                useMemo
              </MenuItem>
              <MenuItem as={RouterLink} to="/use-callback">
                useCallback
              </MenuItem>
              <MenuItem as={RouterLink} to="/use-custom-hook">
                Custom Hook
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
