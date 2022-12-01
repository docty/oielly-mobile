import React from "react"
import { ScrollView, Text, Image, Center, HStack, Box, Button } from "native-base"
import { useNavigation} from '@react-navigation/native'

export const Cart = () => {
    
    const navigation = useNavigation();

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
                <Box flex="1">
                    <Text fontWeight={'bold'} fontSize="md">Nike Air Max</Text>
                    <Text fontWeight={'bold'} fontSize="md">$432.52</Text>
                    <Text fontSize="md">Color: Red</Text>
                    <Text fontSize="sm">Size: 42</Text>

                </Box>

            </HStack>


            <Box bg="white" p="2" rounded="lg" my={'3'}>
                <Text  fontSize="lg" fontWeight={'bold'} bg={'blueGray.900'} color={'white'} p={'2'} rounded={'lg'}>Summary</Text>
                
                <HStack space="3" alignItems="center">
                    <Text fontWeight={'bold'} fontSize="md" flex={'1'}>Total Price</Text>
                    <Text fontWeight={'bold'} fontSize="md" >$432.52</Text>
                </HStack>
                <HStack space="3" alignItems="center">
                    <Text fontWeight={'bold'} fontSize="md" flex={'1'}>Delivery Charges</Text>
                    <Text fontWeight={'bold'} fontSize="md" >$23.52</Text>
                </HStack>
                <HStack space="3" alignItems="center">
                    <Text fontWeight={'bold'} fontSize="md" flex={'1'}>Promo Code</Text>
                    <Text fontWeight={'bold'} fontSize="md" >ASDCZ43</Text>
                </HStack>
                <HStack space="3" alignItems="center">
                    <Text fontWeight={'bold'} fontSize="md" flex={'1'}>Grand Price</Text>
                    <Text fontWeight={'bold'} fontSize="md" >$645.42</Text>
                </HStack>
            </Box>

 

            <Button
                colorScheme="primary"
                onPress={() => navigation.navigate('Address')}

            >
                Proceed to Checkout
            </Button>

        </ScrollView>

    )
}