import { ChakraProvider } from "@chakra-ui/react";
import ProductScreen from "./Screens/ProductScreen";

function App() {
  return (
    <ChakraProvider>
      <ProductScreen />
    </ChakraProvider>
  );
}

export default App;
