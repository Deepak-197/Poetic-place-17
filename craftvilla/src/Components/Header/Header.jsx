import { Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="Header">
      <Link to="/product" style={{textDecoration:"none"}}>
      
      <Text
        fontSize={["md", "md", "xl", "2xl", "2xl"]}
        className="headers-child"
        >
        Home Decor
      </Text>
        </Link>
      <Link to="/product">

      <Text
        fontSize={["md", "md", "xl", "2xl", "2xl"]}
        className="headers-child"
        >
        Products Near me
      </Text>
        </Link>
        <Link to="/product">
      <Text
        fontSize={["md", "md", "xl", "2xl", "2xl"]}
        className="headers-child"
        >
        Fashion
      </Text>
        </Link>
        <Link to="/product">
      <Text
        fontSize={["md", "md", "xl", "2xl", "2xl"]}
        className="headers-child"
        >
        Electronics
      </Text>
        </Link>
    </div>
  );
};
