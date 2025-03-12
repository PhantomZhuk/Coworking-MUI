import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppRoutes from "./routes"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <AppRoutes />
        </LocalizationProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
