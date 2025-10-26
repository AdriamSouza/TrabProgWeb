import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

function Carrinho() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext);
  const [filter, setFilter] = useState('');

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const filteredCart = cart.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="carrinho">
      <h2>Carrinho</h2>
      <p>Itens: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
      <p>Total: R$ {total}</p>

      <div className="filtro">
        <input
          type="text"
          placeholder="Filtrar por produto..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="itens">
        {filteredCart.map((item) => (
          <div className="item" key={item.id}>
            <span>
              {item.name} - R$ {item.price} (x{item.quantity})
            </span>
            <div>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>

      <button className="limpar" onClick={clearCart}>
        Limpar
      </button>
    </section>
  );
}

export default Carrinho;

