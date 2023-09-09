import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './context/AuthContext';

const queryClient = new QueryClient();

function App() {
   return (
      <AuthContextProvider>
         <Header />
         <QueryClientProvider client={queryClient}>
            <Outlet />
         </QueryClientProvider>
      </AuthContextProvider>
   );
}

export default App;
