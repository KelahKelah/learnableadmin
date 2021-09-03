import "./App.css";
import Approute from "./approuter";
import { QueryClient, QueryClientProvider } from "react-query";
import 'react-notifications/lib/notifications.css';
import NotificationContainer from 'react-notifications';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Approute />
      </div>
      <NotificationContainer />
    </QueryClientProvider>
  );
}

export default App;
