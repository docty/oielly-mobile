import React, {Children} from 'react'
import { Box, Input, Icon, Text, ScrollView, Flex, Image, Divider, HStack } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { useQuery } from 'react-query'
import product from '../assets/product.json'

export const Search = () => {


    const getProduct = async () => {

        return Promise.resolve(product)
    }

    const { data } = useQuery({
        queryKey: ['product'],
        queryFn: getProduct
    })

    return (
        <>
            <Box  p="2" bg={'white'}>

                <Input InputLeftElement={<Icon as={Ionicons} name="search" rounded={'xl'} />
                } placeholder="Find the product" />
                <Text fontSize="xs" fontWeight={'bold'}>We find 230 results</Text>


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