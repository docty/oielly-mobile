import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Box, Center, Flex, HStack, Input, Text, Image, Divider, IconButton, Icon, ScrollView, Stack, Pressable } from "native-base"
import React, { Children, useEffect } from "react"
import { useQuery } from "react-query";
import product from '../assets/product.json'


export const Home = () => {
    const { navigate } = useNavigation<any>()

    const getProduct = async () => {

        return Promise.resolve(product)
    }

    const { data } = useQuery({
        queryKey: ['product'],
        queryFn: getProduct
    })


    useEffect(() => {
        // console.log(data);

    })
    return (
        <>
            <Box p={'4'} bg={'white'}>
                <Flex direction="row" justifyContent={'space-between'}>
                    <HStack space="2" alignItems="center">
                        <Avatar source={require('../assets/images/agents/1.jpg')} />
                        <Text fontSize="sm" fontWeight={'semibold'}>Henry Asiedu</Text>
                    </HStack>

                    <Stack bg="white" p="1" rounded="full">
                        <IconButton
                            variant="ghost"
                            icon={<Icon size="lg" as={AntDesign} name="bells" color="black" />}
                        />
                        <Text fontSize="xs" mt={'-12'} bg={'red.500'} p={'0.5'} fontWeight={'bold'} color={'white'} borderWidth={'1'} borderColor={'white'} rounded={'full'} style={{ width: 'min-content' }}>25</Text>
                    </Stack>
                </Flex>

                <Input my={'4'} placeholder="Find a product" rounded={'lg'} leftElement={<Icon as={AntDesign} name="search1" ml={'3'} />
                } />

                <Box bg="blueGray.900" rounded="lg" my={'4'} p={'3'}>
                    <HStack space="3" >
                        <Flex flexDirection={'column'} justifyContent={'space-around'}>
                            <Text fontSize="3xl" fontWeight={'bold'} color={'white'}>50% Off</Text>
                            <Text fontSize="lg" fontWeight={'semibold'} color={'white'}>Special Deal</Text>
                            <Text fontSize="md" color={'white'}>Get discount on every order, only for this month </Text>
                        </Flex>
                        <Image
                            source={require('../assets/images/product/product-1-1-109x122.jpg')}
                            alt="Alternate Text"
                            size="xl"
                        />
                    </HStack>

                </Box>

                <HStack space="3" alignItems="center">
                    <Center bg="primary.400" p={'1'} rounded={'full'} minW={'1/6'} >
                        <Text fontSize="md" color={'white'}>All</Text>
                    </Center>
                    <Center borderWidth={'1'} p={'1'} borderColor={'gray.200'} rounded={'full'} minW={'1/6'} >
                        <Text fontSize="md" >Shoes</Text>
                    </Center>
                    <Center borderWidth={'1'} p={'1'} borderColor={'gray.200'} rounded={'full'} minW={'1/6'} >
                        <Text fontSize="md"  >Clothes</Text>
                    </Center>
                    <Center borderWidth={'1'} p={'1'} borderColor={'gray.200'} rounded={'full'} minW={'1/6'} >
                        <Text fontSize="md"  >Bags</Text>
                    </Center>
                    <Center borderWidth={'1'} p={'1'} borderColor={'gray.200'} rounded={'full'} minW={'1/6'} >
                        <Text fontSize="md"  >Belt</Text>
                    </Center>
                </HStack>

            </Box>

            <ScrollView>
                <Flex w={'full'} flexDirection="row" flexWrap={'wrap'} bg={'white'}>

                    {
                        Children.toArray(data?.map(item => (
                            <Box bg={'gray.100'} position={'relative'} m={'2'} p={'3'} flexGrow={'1'} flexBasis={'200'}  >
                                <Pressable
                                    onPress={() => navigate('Details')}

                                >
                                    <Image
                                        source={require('../assets/images/product/product-3-4-109x122.jpg')}
                                        alt="Alternate Text"
                                        size="250"
                                        resizeMode="contain"

                                    />
                                </Pressable>


                                <Text fontSize="sm" fontWeight={'bold'}>{item.name}</Text>
                                <HStack space="3" alignItems="center">
                                    <Text fontSize="xs" color={'red.700'} fontWeight={'bold'}>${item.price}</Text>
                                    <Divider orientation="vertical" />
                                    <Text fontSize="xs">
                                        <Icon as={Ionicons} name="star" size={'xs'} mr={'2'} />

                                        4.5</Text>
                                </HStack>
                                <IconButton
                                    position={'absolute'}
                                    right={'2'}
                                    variant="solid"
                                    icon={<Icon size="xs" as={AntDesign} name="search1" color="white" />}
                                    onPress={() => {
                                        console.log('hello')
                                    }}

                                />
                                <IconButton
                                    position={'absolute'}
                                    right={'2'}
                                    top={'12'}
                                    variant="solid"
                                    icon={<Icon size="xs" as={AntDesign} name="shoppingcart" color="white" />}
                                    onPress={() => {
                                        console.log('hello')
                                    }}

                                />



                            </Box>
                        )))
                    }
                </Flex>

            </ScrollView>





        </>
    )
}
