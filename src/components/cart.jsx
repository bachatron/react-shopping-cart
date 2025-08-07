import { useOutletContext } from 'react-router-dom';

function Cart () {
  const { cart } = useOutletContext();

  if (!cart.length) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h3>Cart</h3>
      <p>You have {cart.length} items in your cart.</p>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
