import React from 'react'
import { Flex, Icon, Text, Button, Avatar, HStack, Circle, Pressable } from 'native-base'
import { Ionicons } from '@expo/vector-icons'


export const Payment = () => {

    return (
        <Flex p="2" rounded="md" bg={'white'} flex={'1'} flexDirection={'column'}>
            <HStack space="3" alignItems="center" borderWidth={'1'} borderColor={'gray.200'} p={'2'} rounded={'xl'}>
                <Avatar>
                    <Icon as={Ionicons} name="home" size={'lg'} color={'white'} />
                </Avatar>
                <Text fontSize="xs" flex={'1'} fontWeight={'bold'}>MTN</Text>
                <Circle size="4" bg={'green.500'}> </Circle>
            </HStack>

            <Button
                rounded={'lg'}
                my={'6'}
                colorScheme="primary"
                onPress={() => {
                    console.log('hello')
                }}
                _text={{ fontWeight: 'bold' }}
            >
                Place Order
            </Button>

        </Flex>

    )
}