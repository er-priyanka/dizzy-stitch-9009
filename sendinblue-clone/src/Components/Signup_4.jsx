import {  ArrowBackIcon } from "@chakra-ui/icons";
import {Box,  Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, InputGroup, InputRightElement, Link, Stack, Text, Image, Grid, GridItem, Select, RadioGroup, Radio} from "@chakra-ui/react";
import { useContext, useState } from "react";
import {useNavigate} from "react-router-dom";
import { authContext } from "../Context/AuthContext";



export const Signup_4 = ({user, handleChange})=>{
  const navigate = useNavigate();
  const [selling, setSelling] = useState("no")
  const {team, contacts} = user;
  const {handleSignup} = useContext(authContext);

  const handleSubmit = ()=>{
    alert("Sucessfully created your account!!");
    navigate("/dashboard");
    handleSignup(user);
  }

  const setOnlineSelling = (e)=>{
    user.online_selling = e;
    // console.log(user.online_selling)
    setSelling(e);
  }

    return (
        <Flex h="100vh" overflowY="auto" >
            <Box w="70%" py={10} px={8} >
                <svg width="250px" viewBox="0 0 713 103">
                <g fill="none" fill-rule="evenodd">
                <path fill="#091E3F" fill-rule="nonzero" d="M150.339 32.882c-7.245 0-11.886 2.385-11.886 6.638s4.875 6.121 12.12 6.876c10.3.875 23.655 2.624 23.655 16.576 0 9.937-9.399 17.012-23.772 17.012-9.066 0-17.78-1.987-25.456-9.937l6.11-7.95c5.129 5.128 12.05 7.986 19.248 7.95 6.227 0 12.337-1.868 12.337-6.876 0-5.009-4.759-6.658-13.022-7.414-10.418-.874-22.754-3.975-22.754-15.9 0-11.924 12.806-16.356 23.204-16.356a34.299 34.299 0 0 1 21.54 7.075l-6.11 7.096a24.577 24.577 0 0 0-15.214-4.79zm62.485 36.648c5.875 0 12.689-1.987 16.194-5.783l7.598 7.075c-5.777 6.221-15.411 9.162-24.007 9.162-18.348 0-30.117-11.01-30.117-28.241 0-16.357 12.219-28.242 29.882-28.242 16.429 0 27.747 9.262 27.747 27.824 0 1.51-.118 3.16-.235 4.79h-45.234c.98 8.387 7.833 13.415 18.172 13.415zm-.45-35.992c-8.48 0-15.842 4.471-17.624 13.196h33.857c-.666-8.625-6.54-13.196-16.233-13.196zm81.753 14.925c0-9.261-5.443-14.607-15.058-14.607a15.415 15.415 0 0 0-11.283 4.774 15.892 15.892 0 0 0-4.382 11.582v28.48h-11.75v-53.88h10.653l.685 7.513c4.655-5.63 11.538-8.864 18.78-8.824 13.472 0 24.006 8.07 24.006 24.863v30.329H294.03l.098-30.23zm82.87 30.23h-10.985l-.686-8.527c-4.379 6.405-11.67 10.106-19.346 9.818-16.194 0-28.53-10.354-28.53-28.241 0-18.325 12.1-28.242 28.295-28.242 6.795 0 15.959 3.16 19.581 9.6V2.453h11.75l-.079 76.239zM329.1 51.743c0 10.91 7.696 17.787 17.624 17.787 9.647 0 17.467-7.937 17.467-17.728 0-9.79-7.82-17.728-17.467-17.728-9.928 0-17.624 6.758-17.624 17.669zm69.633-50.72a6.637 6.637 0 0 1 5.123 1.81 6.846 6.846 0 0 1 2.122 5.066c-.28 3.852-3.44 6.833-7.245 6.833-3.806 0-6.966-2.98-7.245-6.833a6.846 6.846 0 0 1 2.122-5.066 6.637 6.637 0 0 1 5.123-1.81zm5.777 77.67h-11.75v-53.88h11.75v53.88zm58.177-30.23c0-9.261-5.424-14.607-15.059-14.607a15.395 15.395 0 0 0-11.289 4.768 15.872 15.872 0 0 0-4.376 11.588v28.48h-11.749v-53.88h10.633l.685 7.513c4.663-5.63 11.552-8.865 18.799-8.824 13.472 0 24.007 8.07 24.007 24.863v30.329h-11.75l.099-30.23zm38.38-14.826c3.623-6.44 12.806-10.136 19.582-10.136 16.076 0 28.315 9.937 28.315 28.242 0 17.887-13.14 28.241-28.413 28.241-7.03 0-15.059-2.941-19.484-9.818l-.666 8.527h-10.985V2.453h11.749l-.098 31.184zm.685 18.106a17.664 17.664 0 0 0 5.18 12.787 17.133 17.133 0 0 0 12.698 5c10.203 0 17.624-6.876 17.624-17.787 0-10.911-7.46-17.669-17.624-17.669a17.151 17.151 0 0 0-12.65 4.966 17.68 17.68 0 0 0-5.228 12.703zm71.767 26.95H561.77V2.453h11.75v76.24zm27.062-24.545c0 9.162 5.327 15.482 15.176 15.482a15.24 15.24 0 0 0 11.2-4.742 15.713 15.713 0 0 0 4.309-11.516v-28.56h11.651v53.88h-10.515l-.686-7.432c-4.753 5.757-11.852 8.975-19.249 8.724-13.707 0-23.498-9.48-23.498-25.737V24.813h11.651l-.039 29.335zm85.142 15.382c5.874 0 12.669-1.987 16.194-5.783l7.578 7.075c-5.777 6.221-15.391 9.162-24.007 9.162-18.329 0-30.117-11.01-30.117-28.241 0-16.357 12.239-28.242 29.901-28.242 16.41 0 27.728 9.262 27.728 27.824 0 1.51-.117 3.16-.215 4.79h-45.293c1.038 8.387 7.93 13.415 18.23 13.415zm-.45-35.992c-8.5 0-15.862 4.471-17.624 13.196h33.837c-.705-8.625-6.6-13.196-16.214-13.196z"></path><path fill="#0092FF" d="M85.213 73.712a20.181 20.181 0 0 1-11.867 9.307 27.21 27.21 0 0 0 1.086-7.565c0-12.75-8.787-23.444-20.582-26.356a19.938 19.938 0 0 1 8.767-5.001 19.865 19.865 0 0 1 15.243 2.018c9.593 5.571 12.891 17.95 7.353 27.597M47.421 95.655c-5.247 0-10.238-2.096-13.941-5.675a26.782 26.782 0 0 0 7.05-2.842c10.976-6.373 15.791-19.367 12.408-31.093 8.399 2.42 14.571 10.196 14.571 19.409 0 11.137-9.013 20.201-20.088 20.201M9.627 73.712c-2.623-4.57-3.302-9.954-2.076-14.962a27.2 27.2 0 0 0 5.967 4.704 26.74 26.74 0 0 0 13.462 3.634 27.036 27.036 0 0 0 19.522-8.356c2.107 8.52-1.505 17.771-9.433 22.375a19.882 19.882 0 0 1-10.01 2.702A20.084 20.084 0 0 1 9.626 73.712m0-43.886a20.181 20.181 0 0 1 11.868-9.307 27.159 27.159 0 0 0-1.088 7.567c0 12.743 8.783 23.434 20.572 26.351-6.284 6.106-16.066 7.592-23.998 2.986-4.648-2.7-7.971-7.055-9.36-12.268a20.169 20.169 0 0 1 2.006-15.329M47.421 7.883c5.249 0 10.235 2.094 13.935 5.67A27.035 27.035 0 0 0 54.31 16.4c-6.25 3.63-10.72 9.487-12.586 16.497a27.106 27.106 0 0 0 .17 14.595c-8.395-2.422-14.562-10.197-14.562-19.406 0-11.14 9.011-20.203 20.089-20.203m37.792 21.943c2.626 4.576 3.306 9.966 2.072 14.98a26.999 26.999 0 0 0-5.962-4.722c-6.25-3.627-13.529-4.591-20.5-2.713a26.8 26.8 0 0 0-12.492 7.454 20.2 20.2 0 0 1 .082-10.126c1.387-5.212 4.711-9.569 9.359-12.268 4.647-2.697 10.06-3.414 15.243-2.018 5.183 1.397 9.514 4.74 12.198 9.413m5.997-3.48c-3.608-6.285-9.433-10.78-16.404-12.658a27.128 27.128 0 0 0-5.035-.852C64.771 5.442 56.378.92 47.421.92c-9.277 0-17.474 4.729-22.34 11.913-8.873.656-16.97 5.706-21.45 13.511C.021 32.628-.936 39.95.93 46.96a27.532 27.532 0 0 0 1.785 4.81c-3.867 8.053-3.565 17.623.914 25.425 4.638 8.078 12.806 12.847 21.424 13.495 5 7.4 13.41 11.93 22.367 11.93 9.276 0 17.473-4.73 22.338-11.915 8.873-.656 16.97-5.704 21.451-13.51 4.639-8.08 4.663-17.583.909-25.412 3.872-8.057 3.572-17.631-.909-25.437"></path>
                </g></svg>

                <Stack 
                
                w="65%"
                m="auto"
                my="20"
                textAlign="left"
                spacing={7}
                >
                    <Button w="fit-content" gap={2} color="blue.400" bg="white">
                       <ArrowBackIcon /> Company details
                    </Button>

                    <Heading color="blue.900" fontSize="3xl">
                        Tell us more about your business
                    </Heading>
                    <Text color="gray.600">
                       This will allow us to better address your business needs.
                    </Text>


                    <Grid 
                    templateColumns="repeat(2, 1fr)"
                    gap="10"
                    >
                        <GridItem >
                            <FormControl isRequired>
                                <FormLabel>How many people are in your team?</FormLabel>
                                <Select name="team" onChange={handleChange} placeholder="Select your company size">
                                    <option value="0-1 employee">0-1 employee</option>
                                    <option value="2-10 employees">2-10 employees</option>
                                    <option value="11-50 employees">11-50 employees</option>
                                    <option value="51-250 employees">51-250 employees</option>
                                    <option value="> 250 employee">{"> 250 employee"}</option>
                                    
                                </Select>
                                <FormErrorMessage>Address is required.</FormErrorMessage>
                            </FormControl>
                        </GridItem>

                        <GridItem>
                            <FormControl isRequired>
                                <FormLabel>How many contacts do you have?</FormLabel>
                                <Select name="contacts" onChange={handleChange} placeholder="Select your company size">
                                    <option value="1-300">1-300</option>
                                    <option value="301-2k">301-2k</option>
                                    <option value="2001-5k">2001-5k</option>
                                    <option value="5k-20k">5k-20k</option>
                                    <option value="20k-100k">20k-100k</option>
                                    <option value="More than 100k">More than 100k</option>
                                    <option value="No contacts yet">No contacts yet</option>
                                </Select>
                                <FormErrorMessage>Zipcode is required.</FormErrorMessage>
                            </FormControl>
                        </GridItem>

                        <GridItem >
                           <FormControl>
                                <FormLabel>Do you sell online?</FormLabel>
                                <RadioGroup name="online_selling" onChange={setOnlineSelling} value={selling}>
                                    <Stack spacing={10} direction='row'>
                                        <Radio value='yes'>yes</Radio>
                                        <Radio value='no'>no</Radio>
                                    </Stack>
                                </RadioGroup>
                           </FormControl>

                        </GridItem>

                        
                    </Grid>
                    
                    <Button w="100px" colorScheme="blue"
                    disabled={team=="" || contacts==""}
                    onClick={handleSubmit}
                    >Submit</Button>

                </Stack>

            </Box>
        
        
            <Box>
                <Image h="100%" alt="signup_Image" src="https://sendinblue.fra1.digitaloceanspaces.com/fra1.digitaloceanspaces.com/marketing-content-media/profile.webp" />
            </Box>    
        
        </Flex>
    )
}