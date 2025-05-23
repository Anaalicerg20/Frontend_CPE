import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GlobalStyles from './styles/GlobalStyles.js'
import Routes from "./routes.jsx";

const queryClient = new QueryClient({defaultOptions: { queries: { retry: false } },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client = {queryClient}>
      <Routes />
      <GlobalStyles />
    </QueryClientProvider>
  </StrictMode>
);