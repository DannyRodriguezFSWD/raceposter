import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import create from 'zustand';

// const useStore = create((set) => ({
//   count: 0,
//   increase: () => set((state) => ({ count: state.count + 1 })),
//   decrease: () => set((state) => ({ count: state.count - 1 })),
// }));


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
