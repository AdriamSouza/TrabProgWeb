import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../api';

function ListaProdutos() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>Erro ao carregar produtos: {error}</p>;
  }

  return (
    <section className="produtos">
      <h2>Lista de Produtos</h2>

      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="img">{product.image}</div>
            <p>{product.name}</p>
            <p>R$ {product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button>Ver Detalhes</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ListaProdutos;

