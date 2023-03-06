import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";

import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    <Box
      bg="brown"
      _dark={{
        bg: "gray.600",
      }}
    >
      <Stack
        direction={{
          base: "column",
          md:"row",
          lg: "row",
        }}
        w="full"
        justify="space-between"
        p={10}
      >
        <Flex display={"block"} color="white" justify="center">
          <Text>About Us</Text>
          <Text
            color="white"
            fontSize={"14px"}
            width={{
              base: "235px",
              lg: "235px",
            }}
            // height={{
            //   base: "75px",
            //   lg: "100px",
            // }}
            my={{
              base: 2,
              lg: 0,
            }}
          >
            India's most convenient online grocery channel Buyerapp Fresh and
            Smart makes your grocery shopping even simpler. No more hassles of
            sweating it out in crowded markets, grocery shops & supermarkets -
            now shop from the comfort of your home; office, or on the move. We
            offer you the convenience of shopping for everything that you need
            for your home - be it fresh fruits & vegetables, rice, dals, oil,
            packaged food, dairy item, frozen, pet food, household cleaning
            items & personal care products from a single virtual store.
          </Text>
        </Flex>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{
            base: "12px",
            md: "16px",
          }}
          color="gray.800"
          _dark={{
            color: "white",
          }}
          textAlign={{
            base: "center",
            md: "left",
          }}
        >
          {/* <Flex justify="start" direction="column" color="white">
        <Link textTransform="uppercase">Pre-Sale FAQS</Link>
        <Link textTransform="uppercase">Submit a ticket</Link>
      </Flex> */}
          <Flex justify="start" direction="column" color="white">
            <Link textTransform="uppercase">OUR COMPANY</Link>
            <Link textTransform="uppercase">About us</Link>
            <Link textTransform="uppercase">Contact us</Link>
          </Flex>
        </HStack>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{
            base: "12px",
            md: "16px",
          }}
          color="gray.800"
          _dark={{
            color: "white",
          }}
          textAlign={{
            base: "center",
            md: "left",
          }}
        >
          <Flex justify="start" direction="column" color="white">
            <Link textTransform="uppercase">TOP CATEGORIES</Link>
            <Link textTransform="uppercase">Grocery</Link>
          </Flex>
          <Flex justify="start" direction="column" color="white">
            <Link textTransform="uppercase">POLICIES & INFO</Link>
            <Link textTransform="uppercase">Privacy Policy</Link>
            <Link textTransform="uppercase">SUPPORT</Link>
            <Link textTransform="uppercase">For help send email to</Link>
            <Link textTransform="uppercase">customercare@craftsvilla.com</Link>
          </Flex>
        </HStack>
      </Stack>
      <Divider
        w="95%"
        mx="auto"
        color="gray.600"
        _dark={{
          color: "#F9FAFB",
        }}
        h="3.5px"
      />
      <VStack py={3}>
        <HStack justify="center">
          <Link>
            <Icon
              color="gray.800"
              _dark={{
                color: "white",
              }}
              h="20px"
              w="20px"
              as={FaFacebookF}
            />
          </Link>
          <Link>
            <Icon
              color="gray.800"
              _dark={{
                color: "white",
              }}
              h="20px"
              w="20px"
              as={FiTwitter}
            />
          </Link>
          <Link>
            <Icon
              _dark={{
                color: "white",
              }}
              h="20px"
              w="20px"
              as={GrInstagram}
            />
          </Link>
          <Link>
            <Icon
              _dark={{
                color: "white",
              }}
              h="20px"
              w="20px"
              as={FaLinkedinIn}
            />
          </Link>
        </HStack>

        <Text
          textAlign="center"
          fontSize="smaller"
          _dark={{
            color: "white",
          }}
        >
          &copy;Copyright. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};
