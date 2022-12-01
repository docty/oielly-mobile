import React from 'react'
import { Text, Icon, Avatar, HStack, Center, Radio, Button, Box, VStack, Flex } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
export const Address = () => {
    const navigation = useNavigation<any>();

    return (
        <Flex p="2" rounded="md" bg={'white'} flex={'1'} flexDirection={'column'} justifyContent={'space-between'}>
            <HStack space="3" alignItems="center" borderWidth={'1'} borderColor={'gray.200'} p={'2'} rounded={'xl'}>
                <Avatar>
                    <Icon as={Ionicons} name="home" />
                </Avatar>
                <VStack flex="1">
                    <Text fontSize="md" fontWeight={'bold'}>Home</Text>
                    <Text fontSize="xs">House Number : 425</Text>
                </VStack>
                <Center size="16">
                    <Icon as={Ionicons} name="home" />

                </Center>
            </HStack>


            <Button
                my={'6'}
                colorScheme="warmGray"
                onPress={() => {
                    console.log('hello')
                }}

            >
                Add New Address
            </Button>


            <Button
                colorScheme="primary"
                onPress={() => navigation.navigate('Payment')}
                
                
            >
                Make Payment
            </Button>

        </Flex>

    )
}