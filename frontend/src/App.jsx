import { Box, useColorModeValue } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { CreatePage } from './pages/CreatePage';
import { HomePage } from './pages/HomePage';
import { Navbar } from './components/Navbar';
// import { Modal } from './shared/modal/modal';

export const App = () => {
  return (
    <Box minH={'100vh'} bg={useColorModeValue('gray.100', 'gray.900')}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        {/* <Route path="/a" element={<Modal />} /> */}
      </Routes>
    </Box>
  );
};
