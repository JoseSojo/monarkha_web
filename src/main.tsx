import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { LanguajeProvider } from './context/LanguajeContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <LanguajeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </LanguajeProvider>
)
