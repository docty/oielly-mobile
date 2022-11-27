import { AntDesign, Ionicons } from "@expo/vector-icons"
import { Flex, Center, Box, Button, Image, FormControl, Text, Input, Checkbox, HStack, Icon, IconButton, Link } from "native-base"
import React from "react"
import { ImageBackground } from "react-native"

export const ForgotPassword = () => {

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
            <Button mt={'-5'} mx={'auto'} bg="white" rounded={'3xl'} _text={{ fontWeight: 'bold', fontSize: 'sm', color: 'black' }} w={'1/4'} >  Forgot Password </Button>
            <Box pl={'8'} pr={'8'}>

                <Box>
                    <FormControl   >
                        <FormControl.Label>Email</FormControl.Label>
                        <Input rounded={'3xl'} pl={'5'} InputLeftElement={<Icon pl={'3'} as={Ionicons} name="home" />
                        } p={3} placeholder="Email address" />
                    </FormControl>

                </Box>


                <Button colorScheme="primary" rounded={'3xl'} my={'6'} _text={{ fontWeight: 'bold', fontSize: 'md' }} >  Reset Password  </Button>


            </Box>

        </Box>

    )
}