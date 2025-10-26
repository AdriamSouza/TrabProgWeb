import { Routes, Route, Link } from 'react-router-dom';
import ListaProdutos from './components/ListaProdutos';
import ProdutoDetalhe from './components/ProdutoDetalhe';
import Carrinho from './components/Carrinho';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Minha Loja</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Produtos</Link>
            </li>
            <li>
              <Link to="/carrinho">Carrinho</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<ListaProdutos />} />
          <Route path="/product/:id" element={<ProdutoDetalhe />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <p>Direitos Autorais. 2025.</p>
      </footer>
    </div>
  );
}

export default App;
