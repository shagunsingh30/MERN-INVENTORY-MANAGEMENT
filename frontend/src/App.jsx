import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Footer from "./Footer";

function App() {
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
