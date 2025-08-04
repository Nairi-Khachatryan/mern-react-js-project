import { useState } from 'react';
import {
  Box,
  Text,
  Input,
  VStack,
  Button,
  Heading,
  useToast,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';

import { useProductStore } from '../store/product';

export const CreatePage = () => {
  const toast = useToast();
  const [error, setError] = useState('');
  const { createProduct } = useProductStore();
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  async function handleAddProduct() {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      setError('All fields are required.');
    }
    const { success, message } = await createProduct(newProduct);

    if (!success) {
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        isClosable: true,
      });
    } else {
      setNewProduct({ name: '', price: '', image: '' });
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        isClosable: true,
      });
    }
  }

  return (
    <Container maxW={'container.sm'}>
      <VStack spacing={8}>
        <Heading as={'h1'} size={'2xl'} textAlign={'center'}>
          Create New Product
        </Heading>
        <Box
          p={6}
          w={'full'}
          shadow={'md'}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.800')}
        >
          <VStack spacing={4}>
            <Input
              placeholder={'Product Name'}
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            ></Input>
            <Input
              placeholder={'Product Price'}
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            ></Input>
            <Input
              autoFocus
              placeholder={'Product Image'}
              name="image"
              value={newProduct.image}
              onChange={(e) => {
                setError('');
                setNewProduct({ ...newProduct, image: e.target.value });
              }}
            ></Input>
            <Button w={'full'} onClick={handleAddProduct} colorScheme="blue">
              Add Product
            </Button>
          </VStack>
          <Box>
            {error && (
              <Box mt={4}>
                <Text color="red.500">{error}</Text>
              </Box>
            )}
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};
