import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/home/Home';
import FormularioCategoria from './components/categoria/formularioCategoria/FomularioCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';

function App() {
  return (
    <AuthProvider>
        
            <BrowserRouter>
                <Navbar />
                <div className='min-h-[80vh]'>
                    <Routes>
                        
                        <Route path="/home" element={<Home />} />
                      
                        <Route path="/categorias" element={<ListaCategoria />} />
                        <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                        <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                        <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                       
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </ AuthProvider>
  );
}

export default App;