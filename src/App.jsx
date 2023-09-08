import {Outlet} from "react-router-dom";
import {Header} from "./components/Header";
import {Category} from "./components/Category";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const queryClient = new QueryClient()

function App() {
        return (
            <div>
                <Header/>
                <QueryClientProvider client={queryClient}>
                    <Category/>
                    <Outlet/>
                </QueryClientProvider>

            </div>
        );
    }
export default App;
