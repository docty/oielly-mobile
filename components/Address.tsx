import React from 'react'
import { Text, Icon, Avatar, HStack, Pressable, Radio, Button, Box, VStack, Flex, Circle } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export const Address = () => {
    const navigation = useNavigation<any>();

    return (
        <Pressable

            onPress={() => {
                console.log('hello')
            }}
        >
            <Flex p="2" rounded="md" bg={'white'} flex={'1'} flexDirection={'column'}>
                <HStack space="3" alignItems="center" borderWidth={'1'} borderColor={'gray.200'} p={'2'} rounded={'xl'}>
                    <Avatar>
                        <Icon as={Ionicons} name="home" size={'lg'} color={'white'} />
                    </Avatar>
                    <VStack flex="1">
                        <Text fontSize="md" fontWeight={'bold'}>Home</Text>
                        <Text fontSize="xs">House Number : 425</Text>
                    </VStack>
                    <Circle size="4" bg={'green.500'}> </Circle>
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
                    _text={{ fontWeight: 'bold' }}

                >
                    Make Payment
                </Button>

            </Flex>

        </Pressable>


    )
}