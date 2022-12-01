import { ScrollView, Text, Box, Center, HStack, Image } from "native-base"
import React from "react"

export const Notification = () => {
    return (
        <ScrollView p={'4'} bg={'white'}>
            <Text fontSize="lg" fontWeight={'bold'}>Today</Text>
            <HStack bg={'white'} my={'2'} borderWidth={'1'} borderColor={'gray.50'} space="3" alignItems="center" p={'2'} shadow={'4'}>
                <Center >
                    <Image
                        source={require('../assets/images/product/product-1-1-109x122.jpg')}
                        alt="Alternate Text"
                        size="sm"
                    />
                </Center>
                <Box flex={'1'}>
                    <Text fontSize="sm" fontWeight={'bold'}>50% OFF  on ultraboot</Text>
                </Box>
                <Box>
                    <Text fontSize="xs">19:35am</Text>
                </Box>
            </HStack>
            <HStack bg={'white'} my={'2'} borderWidth={'1'} borderColor={'gray.50'} space="3" alignItems="center" p={'2'} shadow={'4'}>
                <Center >
                    <Image
                        source={require('../assets/images/product/product-2-1-109x122.jpg')}
                        alt="Alternate Text"
                        size="sm"
                    />
                </Center>
                <Box flex={'1'}>
                    <Text fontSize="sm" fontWeight={'bold'}>One step share with new stylish</Text>
                </Box>
                <Box>
                    <Text fontSize="xs">45:25am</Text>
                </Box>
            </HStack>

            <Text fontSize="lg" fontWeight={'bold'}>Yesterday</Text>
            <HStack bg={'white'} my={'2'} borderWidth={'1'} borderColor={'gray.50'} space="3" alignItems="center" p={'2'} shadow={'4'}>
                <Center >
                    <Image
                        source={require('../assets/images/product/product-3-1-109x122.jpg')}
                        alt="Alternate Text"
                        size="sm"
                    />
                </Center>
                <Box flex={'1'}>
                    <Text fontSize="sm" fontWeight={'bold'}>50% OFF  on ultraboot</Text>
                </Box>
                <Box>
                    <Text fontSize="xs">19:35am</Text>
                </Box>
            </HStack>
            <HStack bg={'white'} my={'2'} borderWidth={'1'} borderColor={'gray.50'} space="3" alignItems="center" p={'2'} shadow={'4'}>
                <Center >
                    <Image
                        source={require('../assets/images/product/product-4-1-109x122.jpg')}
                        alt="Alternate Text"
                        size="sm"
                    />
                </Center>
                <Box flex={'1'}>
                    <Text fontSize="sm" fontWeight={'bold'}>One step share with new stylish</Text>
                </Box>
                <Box>
                    <Text fontSize="xs">45:25am</Text>
                </Box>
            </HStack>

            <Text fontSize="lg" fontWeight={'bold'}>Earlier</Text>
            <HStack bg={'white'} my={'2'} borderWidth={'1'} borderColor={'gray.50'} space="3" alignItems="center" p={'2'} shadow={'4'}>
                <Center >
                    <Image
                        source={require('../assets/images/product/product-7-1-109x122.jpg')}
                        alt="Alternate Text"
                        size="sm"
                    />
                </Center>
                <Box flex={'1'}>
                    <Text fontSize="sm" fontWeight={'bold'}>50% OFF  on ultraboot</Text>
                </Box>
                <Box>
                    <Text fontSize="xs">19:35am</Text>
                </Box>
            </HStack>
            <HStack bg={'white'} my={'2'} borderWidth={'1'} borderColor={'gray.50'} space="3" alignItems="center" p={'2'} shadow={'4'}>
                <Center >
                    <Image
                        source={require('../assets/images/product/product-6-1-109x122.jpg')}
                        alt="Alternate Text"
                        size="sm"
                    />
                </Center>
                <Box flex={'1'}>
                    <Text fontSize="sm" fontWeight={'bold'}>One step share with new stylish</Text>
                </Box>
                <Box>
                    <Text fontSize="xs">45:25am</Text>
                </Box>
            </HStack>

        </ScrollView>


    )
}