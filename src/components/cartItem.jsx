function CartItem({ book, onAdd }) {
  return (
    <>
      <img src={book.img} />
      <h4>{book.name}</h4>
      <p>{book.price}</p>
      <button onClick={onAdd}>Add</button>
    </>
  );
}

export default CartItem;