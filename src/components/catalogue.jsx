import { useOutletContext } from 'react-router-dom';
import books from './data/books';
import CartItem from './cartItem';

function Catalogue () {
  const { addToCart } = useOutletContext();

  return (
    <div className="catalogue">
      <h1>Catalogue</h1>
      <p>Explore our wide range of products available for purchase.</p>
      <div className="product-list">
        {books.map((book) => (
            <CartItem book={book} onAdd={() => addToCart(book)} />
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
