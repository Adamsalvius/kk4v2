


import { cartState } from "../stores/cart/atom";
import { useRecoilState } from "recoil";


function useCart() {
  
  const [cart, setCart] = useRecoilState(cartState);
  function setItemQuantity(id, quantity) {
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  }
  function getItemQuantity(id) {
    const item = cart.find((item) => item.id === id);
    return !item ? 0 : item.quantity;
  }

  function addItem(id) {
    const quantity = getItemQuantity(id);
    if (quantity > 0) {
      setItemQuantity(id, quantity + 1);
      return;
    }
    setCart([...cart, { id, quantity: 1 }]);
  }
  return {
    items: cart,
    setItemQuantity,
    getItemQuantity,
    addItem,
  };
}

export default useCart;
