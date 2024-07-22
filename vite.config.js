import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   base:'calpnet',
   server: {
    open:true,
    port:3001
   },
  
})
