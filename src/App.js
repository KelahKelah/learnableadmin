import "./App.css";
import Approute from "./approuter";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Approute />
      </div>
    </QueryClientProvider>
  );
}

export default App;
