import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Avatar, Box, Center, FlatList, Flex, HStack, Input, Text, Image, Divider, IconButton, Icon, ScrollView } from "native-base"
import React, { Children, useEffect } from "react"
import { useQuery } from "react-query";
import product from '../assets/product.json'


export const Home = () => {

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

                    <IconButton
                        variant="ghost"
                        icon={<Icon size="md" as={AntDesign} name="bells" color="black" />}

                    />
                </Flex>

                <Input my={'4'} placeholder="Find a product" rounded={'lg'} leftElement={<Icon as={AntDesign} name="search1" />
                } />

                <Box bg="black" rounded="lg" my={'4'} p={'3'}>
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
                    <Center borderWidth={'1'} p={'1'} rounded={'full'} minW={'1/6'} >
                        <Text fontSize="md" >Shoes</Text>
                    </Center>
                    <Center borderWidth={'1'} p={'1'} rounded={'full'} minW={'1/6'} >
                        <Text fontSize="md"  >Clothes</Text>
                    </Center>
                    <Center borderWidth={'1'} p={'1'} rounded={'full'} minW={'1/6'} >
                        <Text fontSize="md"  >Bags</Text>
                    </Center>
                    <Center borderWidth={'1'} p={'1'} rounded={'full'} minW={'1/6'} >
                        <Text fontSize="md"  >Belt</Text>
                    </Center>
                </HStack>

            </Box>

            <ScrollView>
                 <Flex w={'full'} flexDirection="row" flexWrap={'wrap'} bg={'white'}>
                    
                    {
                        Children.toArray(data?.map(item => (
                            <Box m={'2'} p={'3'} bg={'white'} flexGrow={'1'} flexBasis={'200'}  >
                            <Image
                                source={require('../assets/images/product/product-3-4-109x122.jpg')}
                                alt="Alternate Text"
                                size="250"
                                resizeMode="contain"
                            />
                            <Text fontSize="sm" fontWeight={'bold'}>{item.name}</Text>
                            <HStack space="3" alignItems="center">
                                <Text fontSize="xs" color={'red.700'} fontWeight={'bold'}>${item.price}</Text>
                                <Divider orientation="vertical" />
                                <Text fontSize="xs">
                                    <Icon as={Ionicons} name="star" size={'xs'} mr={'2'} />
                                    
                                    4.5</Text>
                            </HStack>
                
                
                        </Box>  
                        )))
                    }
                 </Flex>
                 
            </ScrollView>





        </>
    )
}
 