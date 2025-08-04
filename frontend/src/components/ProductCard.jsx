import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useProductStore } from '../store/product';
import {
  Box,
  Text,
  Image,
  Modal,
  Input,
  HStack,
  Button,
  VStack,
  Heading,
  useToast,
  ModalBody,
  IconButton,
  ModalHeader,
  ModalFooter,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  ModalCloseButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';

export const ProductCard = ({ product }) => {
  
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteProduct, updateProduct } = useProductStore();
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const [updatedProduct, setUpdatedProduct] = useState(product);

  async function handleUpdateProduct(id, updatedProduct) {
    const { success, message } = await updateProduct(id, updatedProduct);

    if (!success) {
      toast({
        title: 'error',
        description: message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'success',
        description: message,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
    onClose();
  }

  async function handleDeleteProduct(id) {
    const { success, message } = await deleteProduct(id);

    if (!success) {
      toast({
        title: 'error',
        description: message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'success',
        description: message,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <Box
      shadow={'lg'}
      rounded={'lg'}
      overflow={'hidden'}
      transition={'all 0.3s'}
      _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
    >
      <Image
        h={48}
        w={'full'}
        alt={product.name}
        src={product.image}
        objectFit={'cover'}
      ></Image>
      <Box p={4} as="h2" size={'md'} mb={2}>
        <Heading as={'span'}>{product.name}</Heading>
        <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
          {`$${product.price}`}
        </Text>
        <HStack spacing={2}>
          <IconButton
            icon={<EditIcon />}
            colorScheme="blue"
            onClick={onOpen}
          ></IconButton>
          <IconButton
            icon={<DeleteIcon />}
            colorScheme="red"
            onClick={() => handleDeleteProduct(product._id)}
          ></IconButton>
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Update Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                <Input
                  placeholder="Product Name"
                  value={`${updatedProduct.name}`}
                  name="name"
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      name: e.target.value,
                    })
                  }
                ></Input>
                <Input
                  placeholder="Product Price"
                  value={`${updatedProduct.price}`}
                  name="Price"
                  type="number"
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: e.target.value,
                    })
                  }
                ></Input>
                <Input
                  placeholder="Product Image"
                  value={`${updatedProduct.image}`}
                  name="image"
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      image: e.target.value,
                    })
                  }
                ></Input>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => handleUpdateProduct(product._id, updatedProduct)}
                colorScheme="blue"
                mr={4}
              >
                Update
              </Button>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </Box>
  );
};
