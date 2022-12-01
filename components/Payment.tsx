import React from 'react'
import { Flex, Icon, Text, Button, Avatar, HStack } from 'native-base'
import { Ionicons } from '@expo/vector-icons'


export const Payment = () => {

    return (
        <Flex p={'3'} direction="column" flex={'1'} justifyContent={'space-between'}>
            <HStack space="3" alignItems="center" borderWidth={'1'} borderColor={'gray.700'}>
                <Avatar>
                    <Icon as={Ionicons} name="home" />
                </Avatar>
                <Text fontSize="xs" flex={'1'}>MTN</Text>
                <Avatar>
                    <Icon as={Ionicons} name="home" />
                </Avatar>
            </HStack>

            <Button
                rounded={'xl'}
                colorScheme="primary"
                onPress={() => {
                    console.log('hello')
                }}

            >
                Place Order
            </Button>

        </Flex>

    )
}