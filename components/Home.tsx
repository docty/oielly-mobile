import { Box, FlatList, Text } from "native-base"
import React, { useEffect } from "react"
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
        console.log(data);
        
    }) 
    return (
        <Box flex={1}>
            <FlatList
                data={data}
                renderItem={() => (
                    <Text fontSize="xs">Text</Text>

                )}
            />


        </Box>
    )
}