import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Box, Center, Flex, HStack, Input, Text, Image, Divider, IconButton, Icon, ScrollView, Stack, Pressable, Button } from "native-base"
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
            <Box p={'4'} bg={'white'} safeArea>
                <Flex direction="row" justifyContent={'space-between'}>
                    <HStack space="2" alignItems="center">
                        <Avatar source={require('../assets/images/agents/1.jpg')} />
                        <Text fontSize="sm" fontWeight={'semibold'}>Henry Asiedu</Text>
                    </HStack>

                    <Stack bg="white" p="1" rounded="full" position={'relative'}>
                        <IconButton
                            bg={'gray.100'}
                            variant="ghost"
                            onPress={() => navigate('Notification')}
                            icon={<Icon size="lg" as={Ionicons} name="notifications" color="blueGray.700" />}
                        />
                        <Text fontSize="9" right={'2'} position={'absolute'} bg={'red.500'} p={'0.5'} fontWeight={'bold'} color={'white'} borderWidth={'1'} borderColor={'white'} rounded={'full'} style={{ width: 'min-content' }}>25</Text>
                    </Stack>
                </Flex>

                <Input my={'4'} placeholder="Find a product" rounded={'lg'} leftElement={<Icon as={Ionicons} name="search-sharp" ml={'3'} />
                } />

                <Box bg="blueGray.900" rounded="lg" my={'4'} p={'3'}>
                    <HStack space="3" >
                        <Flex flexDirection={'column'} justifyContent={'space-around'} flex={'1'}>
                            <Text fontSize="3xl" fontWeight={'bold'} color={'white'}>50% Off</Text>
                            <Text fontSize="lg" fontWeight={'semibold'} color={'white'}>Special Deal</Text>
                            <Text fontSize="sm" color={'gray.300'}>Get discount on every order, only for this month </Text>
                        </Flex>
                        <Image
                            source={require('../assets/images/product/product-1-1-109x122.jpg')}
                            alt="Alternate Text"
                            size="xl"
                        />
                    </HStack>

                </Box>

                <HStack space="3" alignItems="center">
                    <Button bg="primary.400" p={'1'} rounded={'lg'} minW={'1/6'} >
                        <Text fontSize="md" color={'white'}>All</Text>
                    </Button>
                    <Button borderWidth={'1'} bg={'white'} p={'1'} borderColor={'gray.200'} rounded={'lg'} minW={'1/6'} >
                        <Text fontSize="md" >Shoes</Text>
                    </Button>
                    <Button borderWidth={'1'} bg={'white'} p={'1'} borderColor={'gray.200'} rounded={'lg'} minW={'1/6'} >
                        <Text fontSize="md"  >Clothes</Text>
                    </Button>
                    <Button borderWidth={'1'} bg={'white'} p={'1'} borderColor={'gray.200'} rounded={'lg'} minW={'1/6'} >
                        <Text fontSize="md"  >Bags</Text>
                    </Button>
                    <Button borderWidth={'1'} bg={'white'} p={'1'} borderColor={'gray.200'} rounded={'lg'} minW={'1/6'} >
                        <Text fontSize="md"  >Belt</Text>
                    </Button>
                </HStack>

            </Box>

            <ScrollView>
                <Flex w={'full'} flexDirection="row" flexWrap={'wrap'} bg={'white'}>

                    {
                        Children.toArray(data?.map(item => (
                            <Box bg={'gray.100'} position={'relative'} m={'2'} p={'3'} flexGrow={'1'} flexBasis={'200'}  >
                                <Pressable onPress={() => navigate('Details')}  >
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
                                        4.5
                                    </Text>
                                </HStack>
                                <IconButton
                                    position={'absolute'}
                                    right={'2'}
                                    variant="solid"
                                    icon={<Icon size="md" as={Ionicons} name="heart-sharp" color="white" />}
                                    onPress={() => {
                                        console.log('hello')
                                    }}

                                />
                                <IconButton
                                    position={'absolute'}
                                    right={'2'}
                                    bg={'blueGray.700'}
                                    top={'16'}
                                    variant="solid"
                                    icon={<Icon size="md" as={Ionicons} name="cart-sharp" color="white" />}
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
