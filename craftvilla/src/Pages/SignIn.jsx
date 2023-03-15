import React, { useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";
import { extendTheme } from '@chakra-ui/react'


const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}
const theme = extendTheme({ breakpoints })

const SignIn = () => {

  const toast = useToast()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => (state.AuthReducer.isLoading));

  const loginHandler = () => {
    if (email && password) {
      const params = {
        email,
        password,
      };
      dispatch(login(params)).then((res) => {
        if (res === LOGIN_SUCCESS) {
          console.log(res)
          toast({
            description: "Signed in successfully",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          navigate("/", { replace: true });
        } else {
          toast({
            description: "Please Signup First",
            status: 'error',
            duration: 2000,
            isClosable: true,

          })
        }
        
      });
    }
  };

  return (

    <Box height="85vh" bg="#ffffff" padding="0px" >
      <Divider orientation="horizontal" />
      <Box
       width={{base: "90%", sm: "80%", md: "70%", lg: "60%"}}
       position="center"
       margin="auto"
       height="100%"
       padding={{base: "20px 10px 60px 10px", lg: "20px 0px 60px 0px"}}
       
      >
        <Box width="100%" textAlign={{base: "center", lg: "left"}} padding="" >
          <Breadcrumb fontWeight="light" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/sign-in">Sign-In</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        <Box width="100%" padding="20px 0px 50px">
          <Heading as="h3" size="lg" fontWeight="medium" textAlign="center">
            Welcome Back
          </Heading>
        </Box>
        <Divider orientation="horizontal" />
        <Box mx="auto" maxW="md" py="6">
          <Stack spacing={4}>
            <Box>
              <FormControl>
                <FormLabel fontWeight="hairline">Email address *</FormLabel>
                <Input
                  focusBorderColor="black"
                  errorBorderColor="red.300"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="lg"
                 
                  
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel fontWeight="hairline">Password *</FormLabel>
                <Input
                  focusBorderColor="black"
                  errorBorderColor="red.300"
                  type="password"
                  size="lg"
                 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                 
                />
                 
              </FormControl>
            </Box>
          </Stack>
          <Box paddingTop={{base: "30px", lg: "50px"}} textAlign="center">
            New User?{" "}
            <Link color="rgb(228,9,128)" href="sign-up">
              Sign Up
            </Link>
          </Box>

          <Box display='flex'
    alignItems='center'
    justifyContent='center'>
          <Button
                 borderRadius="0"
                 alignItems='center'
           justifyContent='center'
             width="100%"
             maxWidth="180px"
            //  colorScheme="teal"
             background="#E40980"
             padding="12px"
             mt="20px"
             fontSize="1.2rem"
             
             color="#fff"
             _hover={{
               background: "teal.500",
             }}
            onClick={loginHandler}
            // isLoading={isLoading}
          >
            Sign In
          </Button>
          </Box>
     
        </Box>
      </Box>
    </Box>


    
    // <Box height="85vh" bg="#ffffff" padding="0px" >
    //   <Divider orientation="horizontal" />
    //   <Box
    //     width="1150px"
    //     position="center"
    //     margin="auto"
    //     height="100%"
    //     padding="20px 0px 60px 0px"
       
    //   >
    //     <Box width="20%" textAlign="left" padding="" >
    //       <Breadcrumb fontWeight="light" fontSize="sm">
    //         <BreadcrumbItem>
    //           <BreadcrumbLink href="/">Home</BreadcrumbLink>
    //         </BreadcrumbItem>
    //         <BreadcrumbItem>
    //           <BreadcrumbLink href="/sign-in">Sign-In</BreadcrumbLink>
    //         </BreadcrumbItem>
    //       </Breadcrumb>
    //     </Box>
    //     <Box width="100%" padding="20px 0px 50px">
    //       <Heading as="h3" size="lg" fontWeight="medium" textAlign="center">
    //         Welcome Back
    //       </Heading>
    //     </Box>
    //     <Divider orientation="horizontal" />
    //     <Box width="50%" margin="0 auto" padding="50px 0px 50px 0px">
    //       <Stack spacing={4}>
    //         <Box>
    //           <FormControl>
    //             <FormLabel fontWeight="hairline">Email address *</FormLabel>
    //             <Input
    //               focusBorderColor="black"
    //               errorBorderColor="red.300"
    //               type="email"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               size="lg"
    //               borderRadius="0px"
                  
    //             />
    //           </FormControl>
    //         </Box>
    //         <Box>
    //           <FormControl>
    //             <FormLabel fontWeight="hairline">Password *</FormLabel>
    //             <Input
    //               focusBorderColor="black"
    //               errorBorderColor="red.300"
    //               type="password"
    //               size="lg"
    //               borderRadius="0px"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
                 
    //             />
                 
    //           </FormControl>
    //         </Box>
    //       </Stack>
    //       <Box paddingTop="50px">
    //         New User?{" "}
    //         <Link color="teal.500" href="sign-up">
    //           Sign Up
    //         </Link>
    //       </Box>
    //       <Button
    //         borderRadius="0px"
    //         width="180px"
    //         color="white"
    //         background="#302C26"
    //         padding="20px"
    //         marginTop="20px"
    //         _hover={{
    //           color: "#302C26",
    //           background: "#ffffff",
    //           border: "1px solid black",
    //         }}
    //         onClick={loginHandler}
    //         // isLoading={isLoading}
    //       >
    //         Sign In
    //       </Button>
    //     </Box>
    //   </Box>
    // </Box>
  );
};

export default SignIn;