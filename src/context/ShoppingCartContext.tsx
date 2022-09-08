import { createContext, useContext, ReactNode, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  // these take ids as numbers and return nothing (void) or a number

  // increment (add to cart)
  increaseCartQuantity: (id: number) => void;
  // decrement
  decreaseCartQuantity: (id: number) => void;
  // remove
  removeFromCart: (id: number) => void;
  // get quantity
  getItemQuantity: (id: number) => number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

// get the context
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

// implement the provider - a wrapper that gives needed values to render the shopping cart. takes in children and re-renders out those children (objects)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: number) {
    // if this evaluates to something, get the quantity. if we have nothing, return 0
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      // check if item does or does not exist in cart
      if (currItems.find((item) => item.id === id) == null) {
        // if not, create the item
        return [...currItems, { id, quantity: 1 }];
      } else {
        // if yes, increment quantity of that item by 1
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      // check if item quantity is 1 and if so get rid of it
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        // remove the item with this id from list of items
        return currItems.filter((item) => item.id !== id);
      } else {
        // decrease item quantity by 1
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
