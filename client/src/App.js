import { ChakraProvider } from "@chakra-ui/react";
import ProductsScreen from "./Screens/ProductsScreen";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./Screens/LandingPage";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import Footer from "./components/Footer";
import LoginScreen from "./Screens/LoginScreen";
import EmailVerificationScreen from "./Screens/EmailVerificationScreen";
import PasswordResetScreen from "./Screens/PasswordResetScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import axios from "axios";
import { VStack, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const [googleClient, setGoogleClient] = useState(null);
  useEffect(() => {
    const googleKey = async () => {
      const { data: googleId } = await axios.get("/api/config/google");
      setGoogleClient(googleId);
    };
    googleKey();
  }, [googleClient]);

  return !googleClient ? (
    <VStack pt="37vh">
      <Spinner
        mt="20"
        thickness="2px"
        speed="0.65s"
        emptyColor="gray.200"
        color="cyan.500"
        size="xl"
      />
    </VStack>
  ) : (
    <GoogleOAuthProvider clientId={googleClient}>
      <ChakraProvider>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/products" element={<ProductsScreen />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/registration" element={<RegistrationScreen />} />
              <Route
                path="/email-verify/:token"
                element={<EmailVerificationScreen />}
              />
              <Route
                path="/password-reset/:token"
                element={<PasswordResetScreen />}
              />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ChakraProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
