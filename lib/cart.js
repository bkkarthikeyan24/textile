import { getCurrentUserEmail } from "@/lib/user";

export function getCartItems() {
  if (typeof window === "undefined") {
    return [];
  }

  const currentUserEmail = getCurrentUserEmail();
  const cartKey = currentUserEmail ? `cartItems:${currentUserEmail}` : "cartItems:guest";

  return JSON.parse(window.localStorage.getItem(cartKey) || "[]");
}

export function saveCartItems(items) {
  if (typeof window === "undefined") {
    return;
  }

  const currentUserEmail = getCurrentUserEmail();
  const cartKey = currentUserEmail ? `cartItems:${currentUserEmail}` : "cartItems:guest";

  window.localStorage.setItem(cartKey, JSON.stringify(items));
}

export function addCartItem(product, categoryLabel, size) {
  const cart = getCartItems();
  const existingItem = cart.find((item) => item.id === product.id && item.size === size);

  if (existingItem) {
    const updatedCart = cart.map((item) =>
      item.id === product.id && item.size === size
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
    saveCartItems(updatedCart);
    return;
  }

  saveCartItems([
    ...cart,
    {
      id: product.id,
      name: product.name,
      category: categoryLabel,
      price: product.price,
      size,
      image: product.image,
      quantity: 1
    }
  ]);
}

export function moveGuestCartToCurrentUser() {
  if (typeof window === "undefined") {
    return;
  }

  const currentUserEmail = getCurrentUserEmail();

  if (!currentUserEmail) {
    return;
  }

  const guestItems = JSON.parse(window.localStorage.getItem("cartItems:guest") || "[]");

  if (!guestItems.length) {
    return;
  }

  const userCartKey = `cartItems:${currentUserEmail}`;
  const existingUserItems = JSON.parse(window.localStorage.getItem(userCartKey) || "[]");

  window.localStorage.setItem(userCartKey, JSON.stringify([...existingUserItems, ...guestItems]));
  window.localStorage.removeItem("cartItems:guest");
}
