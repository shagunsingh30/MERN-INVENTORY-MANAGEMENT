import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Footer from "./Footer";

function App() {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Box flex="1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
