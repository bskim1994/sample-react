import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from "react-query"
import { RecoilRoot } from 'recoil';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>,
)
