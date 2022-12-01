import { Avatar, Box, Center, Text, Image, Button, Icon, Select, HStack, Flex } from "native-base"
import React from "react"

export const Details = () => {

    return (
        <Flex rounded="lg" p={'3'}>

            <Center p="20">
                <Avatar
                    source={require('../assets/images/product/product-3-4-109x122.jpg')}
                    size={'2xl'}
                />

            </Center>
            <Text fontSize="md" fontWeight={'bold'}>Nike Air Max</Text>
            <Text fontSize="sm" fontWeight={'semibold'}>Description</Text>
            <Text fontSize="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloremque quia cumque iste vel repellendus nemo culpa voluptate alias illo. Repellat nihil consequuntur expedita voluptates consectetur esse deleniti neque laudantium.</Text>
            <Text fontSize="md" fontWeight={'bold'}>Color</Text>
            <Text fontSize="md" fontWeight={'bold'}>Size</Text>
            <Select
                placeholder="Select your favorite programming language"
                minWidth="64"

            >
                <Select.Item label="1" value="1" />
                <Select.Item label="2" value="2" />
                <Select.Item label="3" value="3" />
                <Select.Item label="4" value="4" />
                <Select.Item label="5" value="5" />
            </Select>

            <HStack space="3" alignItems="center">
                <Text fontSize="xs">$123.542</Text>

                <Button
                    colorScheme="primary"
                    onPress={() => {
                        console.log('hello')
                    }}

                >
                    Add to Cart
                </Button>

            </HStack>

        </Flex>

    )
}