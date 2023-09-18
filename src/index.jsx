import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import GlobalStyle from './utils/style/GlobalStyle';
import Header from './components/Header';
import About from './pages/About';
import Footer from "./components/Footer";
import Page404 from "./pages/404/Page404";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Page404 />} />
    </Routes>
);

const App = () => (
    <StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <AppRoutes />
            <Footer />
        </BrowserRouter>
    </StrictMode>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
