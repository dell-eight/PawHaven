"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  productId: string;
  quantity: number;
};

type CartContextValue = {
  addItem: (productId: string) => void;
  clearCart: () => void;
  items: CartItem[];
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  totalQuantity: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const cartStorageKey = "pawnest-cart";

function readStoredCart() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedCart = window.localStorage.getItem(cartStorageKey);
    if (!storedCart) {
      return [];
    }

    const parsedCart = JSON.parse(storedCart);
    if (!Array.isArray(parsedCart)) {
      return [];
    }

    return parsedCart.filter(
      (item): item is CartItem =>
        typeof item?.productId === "string" &&
        Number.isInteger(item?.quantity) &&
        item.quantity > 0,
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const loadCart = window.setTimeout(() => {
      setItems(readStoredCart());
      setHasLoaded(true);
    }, 0);

    return () => window.clearTimeout(loadCart);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      window.localStorage.setItem(cartStorageKey, JSON.stringify(items));
    }
  }, [hasLoaded, items]);

  const addItem = useCallback((productId: string) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.productId === productId,
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentItems, { productId, quantity: 1 }];
    });
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    setItems((currentItems) => {
      if (quantity <= 0) {
        return currentItems.filter((item) => item.productId !== productId);
      }

      return currentItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.min(quantity, 99) }
          : item,
      );
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.productId !== productId),
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const value = useMemo(
    () => ({
      addItem,
      clearCart,
      items,
      removeItem,
      setQuantity,
      totalQuantity: items.reduce((total, item) => total + item.quantity, 0),
    }),
    [addItem, clearCart, items, removeItem, setQuantity],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
