import React from "react"
import { ScrollView, Text, Image, Center, HStack, Box, Button, Input, Icon, Select, VStack } from "native-base"
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";

export const Cart = () => {

    const navigation = useNavigation<any>();

    return (
        <ScrollView bg={'white'} p={'4'}>
            <HStack space="3" alignItems="center" shadow={'3'} p={'2'}>
                <Center bg="primary.400"  >
                    <Image
                        source={require('../assets/images/product/product-1-1-109x122.jpg')}
                        alt="Alternate Text"
                        size="xl"
                    />
                </Center>
                <VStack space={'4'} flex="1">
                    <Text fontWeight={'bold'} fontSize="md">Nike Air Max</Text>
                    <HStack space="3" alignItems="center">
                        <Text fontWeight={'bold'} fontSize="md">Quantity</Text>
                        <HStack space="0" alignItems="stretch" flex={'1'} w={'32'} justifyContent={'flex-end'}>
                            <Button
                                variant="outline"
                                size={'sm'}
                                onPress={() => {
                                    console.log('hello')
                                }}
                                roundedTopRight={'none'}
                                roundedBottomRight={'none'}
                                borderColor={'gray.200'}
                                borderRightWidth={'0'}
                                _text={{ fontSize: '2xl' }}
                                _hover={{ _text: { color: 'white' }, backgroundColor: 'blueGray.900' }}
                            >
                                -
                            </Button>

                            <Input placeholder="1" w={'1/6'} rounded={'none'} />
                            <Button
                                variant="outline"
                                onPress={() => {
                                    console.log('hello')
                                }}
                                roundedTopLeft={'none'}
                                roundedBottomLeft={'none'}
                                borderColor={'gray.200'}
                                borderLeftWidth={'0'}
                                _text={{ fontSize: '2xl' }}
                                _hover={{ _text: { color: 'white' }, backgroundColor: 'blueGray.900' }}
                            >
                                +
                            </Button>

                        </HStack>


                    </HStack>



                    <HStack space="3" alignItems="center" justifyContent={'space-between'}>
                        <Text fontWeight={'bold'} fontSize="md">Color</Text>
                        <Box justifyContent={'flex-end'}>
                            <Select
                                placeholder="Choose your color"
                                width="32"
                                flex={'1'}
                            >
                                <Select.Item label="Red" value="Red" />
                                <Select.Item label="Pink" value="Pink" />
                                <Select.Item label="Black" value="Black" />
                            </Select>
                        </Box>
                    </HStack>
                    <HStack space="3" alignItems="center" justifyContent={'space-between'}>
                        <Text fontWeight={'bold'} fontSize="md">Size</Text>
                        <Box justifyContent={'flex-end'}>
                            <Input placeholder="Size" display={'block'} width="32" />
                        </Box>
                    </HStack>
                </VStack>

            </HStack>


            <Box bg="white" p="2" rounded="lg" my={'3'} >
                <Text fontSize="lg" fontWeight={'bold'} bg={'blueGray.900'} color={'white'} p={'2'} rounded={'lg'}>Summary</Text>

                <HStack space="3" alignItems="center" my={'2'}>
                    <Text fontWeight={'bold'} fontSize="md" flex={'1'}>Total Price</Text>
                    <Text fontWeight={'bold'} fontSize="md" >$432.52</Text>
                </HStack>
                <HStack space="3" alignItems="center" my={'2'}>
                    <Text fontWeight={'bold'} fontSize="md" flex={'1'}>Delivery Charges</Text>
                    <Text fontWeight={'bold'} fontSize="md" >$23.52</Text>
                </HStack>
                <HStack space="3" alignItems="center" my={'2'}>
                    <Text fontWeight={'bold'} fontSize="md" flex={'1'}>Promo Code</Text>
                    <Text fontWeight={'bold'} fontSize="md" >ASDCZ43</Text>
                </HStack>
                <HStack space="3" alignItems="center" my={'2'}>
                    <Text fontWeight={'bold'} fontSize="md" flex={'1'}>Grand Price</Text>
                    <Text fontWeight={'bold'} fontSize="md" >$645.42</Text>
                </HStack>
            </Box>



            <Button
                colorScheme="primary"
                onPress={() => navigation.navigate('Address')}
                _text={{ fontWeight: 'bold', fontSize: 'md' }}

            >
                Proceed to Checkout
            </Button>

        </ScrollView>

    )
}