import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api';
import { CartContext } from '../context/CartContext';

function ProdutoDetalhe() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Carregando produto...</p>;
  }

  if (error) {
    return <p>Erro ao carregar produto: {error}</p>;
  }

  if (!product) {
    return <h2>Produto não encontrado!</h2>;
  }

  return (
    <section className="produto-detalhe">
      <h2>{product.name}</h2>
      <div className="card">
        <div className="img">{product.image}</div>
        <p>{product.name}</p>
        <p>R$ {product.price}</p>
        <button onClick={() => addToCart(product)}>Comprar</button>
      </div>
    </section>
  );
}

export default ProdutoDetalhe;
