import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import "./Navbar.css";
import { chakra } from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { CloseButton } from "react-bootstrap";

export const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <Link to="/">
            <img style={{ width: "200px" }} src={logo} alt="" />
            </Link>
            
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Link to="/sign-in">
              <Button variant="ghost">
                <FaUserAlt className="user-icon" />
                Sign in/Register
              </Button>
              </Link>
              <Button variant="ghost">
                <AiOutlineHeart size={"20px"} className="heart-icon" />
                Wishlist
              </Button>
              <Button variant="ghost">
                <ImCart className="cart-icon" />
                Cart
              </Button>
            </HStack>
            <Button colorScheme="brand" size="sm">
              Get Started
            </Button>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Link to="/sign-in">

                <Button w="full" variant="ghost">

                <FaUserAlt className="user-icon" />
                Sign in/Register
                </Button>
                </Link>
                <Button w="full" variant="ghost">
                <AiOutlineHeart size={"20px"} className="heart-icon" />
                Wishlist
                </Button>
                <Button w="full" variant="ghost">
                <ImCart className="cart-icon" />
                Cart
                </Button>

              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
