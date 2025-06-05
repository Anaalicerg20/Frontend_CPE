import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GlobalStyles from './styles/GlobalStyles.js'
import Routes from "./routes.jsx";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const queryClient = new QueryClient({defaultOptions: { queries: { retry: false } },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client = {queryClient}>
      <Routes />
      <GlobalStyles />
    </QueryClientProvider>
    <ToastContainer
      postion = "bottom-right"
      autoClose = {2000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="dark">
    </ToastContainer>
  </StrictMode>
);