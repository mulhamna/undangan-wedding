import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom']
                }
            }
        }
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
})