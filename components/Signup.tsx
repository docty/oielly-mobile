import { AntDesign, Ionicons } from "@expo/vector-icons"
import { Flex, Center, Box, Button, Image, FormControl, Text, Input, Checkbox, HStack, Icon, IconButton, Link } from "native-base"
import React from "react"
import { ImageBackground } from "react-native"

export const Signup = () => {

    return (
        <Box bg={'white'} flex={'1'}>
            <Center roundedBottom={'3xl'} p={'6'} pb={'0'} bg={'danger.500'}>
                <Image
                    source={require('../assets/doctors.svg')}
                    alt="Auth File"
                    size="xl"
                    w='full'
                    resizeMethod="resize"
                    resizeMode="cover"
                />

            </Center>
            <Button mt={'-5'} mx={'auto'} bg="white" rounded={'3xl'} _text={{ fontWeight: 'bold', fontSize: 'sm', color: 'black' }} w={'1/4'} >  Sign Up </Button>
            <Box pl={'8'} pr={'8'}>

                <Box>
                    <FormControl   >
                        <FormControl.Label>Name</FormControl.Label>
                        <Input rounded={'3xl'} pl={'5'} InputLeftElement={<Icon pl={'3'} as={Ionicons} name="lock-closed" />
                        } p={3} placeholder="Full name" />
                    </FormControl>
                    <FormControl   >
                        <FormControl.Label>Email</FormControl.Label>
                        <Input rounded={'3xl'} pl={'5'} InputLeftElement={<Icon pl={'3'} as={Ionicons} name="home" />
                        } p={3} placeholder="Email address" />
                    </FormControl>
                    <FormControl   >
                        <FormControl.Label> Password</FormControl.Label>
                        <Input rounded={'3xl'} pl={'5'} InputLeftElement={<Icon pl={'3'} as={Ionicons} name="lock-closed" />
                        } p={3} placeholder="Password" />
                    </FormControl>
                    <FormControl   >
                        <FormControl.Label>Confirm Password</FormControl.Label>
                        <Input rounded={'3xl'} pl={'5'} InputLeftElement={<Icon pl={'3'} as={Ionicons} name="lock-closed" />
                        } p={3} placeholder="Confirm Password" />
                    </FormControl>
                </Box>

                <Checkbox value="checkbox" my={'4'}>
                    I agree to<Link  href="https://nativebase.io">Terms</Link>and<Link href="https://nativebase.io">Privacy Policy</Link>
                </Checkbox>

                <Button colorScheme="primary" rounded={'3xl'} _text={{ fontWeight: 'bold', fontSize: 'md' }} >  Sign Up  </Button>

                <Center my={'4'}>
                    <Text fontSize="md">Sign up with</Text>
                    <Button.Group  >
                        <IconButton
                            variant="unstyled"
                            icon={<Icon size="lg" as={Ionicons} name="logo-facebook" color="black" />}
                        />
                        <IconButton
                            variant="unstyled"
                            icon={<Icon size="lg" as={AntDesign} name="google" color="black" />}
                        />
                    </Button.Group>
                </Center>

                <HStack alignItems={'center'} justifyContent={'center'}>
                    <Text fontSize="md">Already have an account?</Text>
                    <Button variant={'link'} _text={{ color: 'red.500' }}> Login </Button>
                </HStack>
            </Box>

        </Box>

    )
}