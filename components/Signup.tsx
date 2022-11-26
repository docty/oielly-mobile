import { AntDesign, Ionicons } from "@expo/vector-icons"
import { Flex, Center, Box, Button, Image, FormControl, Text, Input, Checkbox, HStack, Icon, IconButton, Link } from "native-base"
import React from "react"
import { ImageBackground } from "react-native"

export const Signup = () => {

    return (
        <Box bg={'white'} flex={'1'}>
            <Center  roundedBottom={'3xl'} p={'6'} pb={'0'}>
                {/* <Image
                    source={require('../assets/auth.svg')}
                    alt="Auth File"
                    size="xl"
                    w='full'
                    resizeMethod="resize"
                    resizeMode="contain"
                /> */}
                <ImageBackground source={require('../assets/auth.svg')} />
                <Button colorScheme="primary" rounded={'3xl'}>  Sign Up </Button>
            </Center>

            <Box pl={'8'} pr={'8'}>


                <Box>
                    <FormControl   >
                        <FormControl.Label>Name</FormControl.Label>
                        <Input rounded={'3xl'} pl={'5'} InputLeftElement={<Icon pl={'3'} as={Ionicons} name="home" />
                        } p={3} placeholder="Full name" />
                    </FormControl>
                    <FormControl   >
                        <FormControl.Label>Email</FormControl.Label>
                        <Input rounded={'3xl'} pl={'5'} InputLeftElement={<Icon pl={'3'} as={Ionicons} name="home" />
                        } p={3} placeholder="Email address" />
                    </FormControl>
                    <FormControl   >
                        <FormControl.Label> Password</FormControl.Label>
                        <Input rounded={'3xl'} pl={'5'} InputLeftElement={<Icon pl={'3'} as={Ionicons} name="home" />
                        } p={3} placeholder="Password" />
                    </FormControl>
                    <FormControl   >
                        <FormControl.Label>Confirm Password</FormControl.Label>
                        <Input rounded={'3xl'} pl={'5'} InputLeftElement={<Icon pl={'3'} as={Ionicons} name="home" />
                        } p={3} placeholder="Confirm Password" />
                    </FormControl>
                </Box>

                <Checkbox value="checkbox" my={'4'}>
                    I agree to  <Link href="https://nativebase.io">Terms</Link>
                    and <Link href="https://nativebase.io"> Privacy Policy</Link>
                </Checkbox>

                <Button colorScheme="primary" rounded={'3xl'} fontWeight={'bold'} >  Sign Up  </Button>

                <Center my={'4'}>
                    <Text fontSize="lg">Sign up with</Text>
                    <Button.Group  >
                        <IconButton
                            variant="unstyled"
                            icon={<Icon size="md" as={AntDesign} name="search1" color="black" />}
                        />
                        <IconButton
                            variant="unstyled"
                            icon={<Icon size="md" as={AntDesign} name="search1" color="black" />}
                        />
                    </Button.Group>
                </Center>

                <HStack alignItems={'center'} justifyContent={'center'}>
                    <Text fontSize="lg">Already have an account?</Text>
                    <Button variant={'link'}> Login </Button>
                </HStack>
            </Box>

        </Box>

    )
}