import {
  Box,
  Flex,
  Text,
  HStack,
  Button,
  Container,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { LuSun } from 'react-icons/lu';
import { IoMoon } from 'react-icons/io5';
import { FaRegPlusSquare } from 'react-icons/fa';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';

import { Link } from 'react-router-dom';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={'1140px'} px={4}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDirection={{
          base: 'column',
          sm: 'row',
        }}
      >
        <Text
          bgClip={'text'}
          fontWeight={'bold'}
          textAlign={'center'}
          textTransform={'uppercase'}
          fontSize={{ base: '22', sm: '28' }}
          bgGradient={'linear(to-r, cyan.400, blue.500)'}
        >
          <Box
            to="/"
            gap={2}
            as={Link}
            height={50}
            display="flex"
            alignItems="center"
          >
            <MdOutlineLocalGroceryStore
              size={28}
              color={useColorModeValue('black', 'white')}
            />
            Product Store
          </Box>
        </Text>
        <HStack spacing={2} alignItems={'center'}>
          <Link to={'/create'}>
            <Button>
              <FaRegPlusSquare />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <IoMoon /> : <LuSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
