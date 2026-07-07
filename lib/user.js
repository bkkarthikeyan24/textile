const USERS_KEY = "shoppingUsers";
const CURRENT_USER_KEY = "currentUserEmail";

export function getUsers() {
  if (typeof window === "undefined") {
    return {};
  }

  return JSON.parse(window.localStorage.getItem(USERS_KEY) || "{}");
}

export function saveUsers(users) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getCurrentUserEmail() {
  if (typeof window === "undefined") {
    return "";
  }

  return window.localStorage.getItem(CURRENT_USER_KEY) || "";
}

export function getCurrentUser() {
  const users = getUsers();
  const currentUserEmail = getCurrentUserEmail();

  if (!currentUserEmail) {
    return null;
  }

  return users[currentUserEmail] || null;
}

export function loginOrCreateUser({ username, email, mobile, address, password }) {
  const users = getUsers();
  const existingUser = users[email];

  if (existingUser) {
    if (existingUser.password !== password) {
      return {
        success: false,
        message: "Incorrect password for this email"
      };
    }

    users[email] = {
      ...existingUser,
      username,
      mobile: mobile || existingUser.mobile || "",
      address: address || existingUser.address || ""
    };
  } else {
    users[email] = {
      username,
      email,
      mobile,
      address,
      password,
      profileImage: "",
      orders: []
    };
  }

  saveUsers(users);
  setCurrentUser(email);

  return {
    success: true,
    user: users[email]
  };
}

export function signInUser({ identifier, password }) {
  const users = getUsers();
  const matchedUser = Object.values(users).find(
    (user) => user.email === identifier || user.mobile === identifier
  );

  if (!matchedUser) {
    return {
      success: false,
      message: "Account not found"
    };
  }

  if (matchedUser.password !== password) {
    return {
      success: false,
      message: "Incorrect password"
    };
  }

  setCurrentUser(matchedUser.email);

  return {
    success: true,
    user: matchedUser
  };
}

export function setCurrentUser(email) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(CURRENT_USER_KEY, email);
  window.localStorage.setItem("isLoggedIn", "true");
  window.localStorage.setItem("userName", getUsers()[email]?.username || "Customer");
}

export function logoutUser() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(CURRENT_USER_KEY);
  window.localStorage.setItem("isLoggedIn", "false");
  window.localStorage.removeItem("userName");
}

export function updateCurrentUserProfileImage(profileImage) {
  const users = getUsers();
  const email = getCurrentUserEmail();

  if (!email || !users[email]) {
    return;
  }

  users[email] = {
    ...users[email],
    profileImage
  };

  saveUsers(users);
}

export function updateCurrentUserProfile(profileData) {
  const users = getUsers();
  const currentEmail = getCurrentUserEmail();

  if (!currentEmail || !users[currentEmail]) {
    return null;
  }

  const nextEmail = profileData.email || currentEmail;
  const updatedUser = {
    ...users[currentEmail],
    ...profileData
  };

  if (nextEmail !== currentEmail) {
    const oldCartKey = `cartItems:${currentEmail}`;
    const nextCartKey = `cartItems:${nextEmail}`;
    const existingCart = window.localStorage.getItem(oldCartKey);

    if (existingCart) {
      window.localStorage.setItem(nextCartKey, existingCart);
      window.localStorage.removeItem(oldCartKey);
    }

    delete users[currentEmail];
  }

  users[nextEmail] = updatedUser;
  saveUsers(users);
  window.localStorage.setItem(CURRENT_USER_KEY, nextEmail);
  window.localStorage.setItem("userName", updatedUser.username || "Customer");
  return updatedUser;
}

export function addOrderToCurrentUser(order) {
  const users = getUsers();
  const email = getCurrentUserEmail();

  if (!email || !users[email]) {
    return;
  }

  users[email] = {
    ...users[email],
    orders: [order, ...(users[email].orders || [])]
  };

  saveUsers(users);
}

export function cancelOrderForCurrentUser(orderId) {
  const users = getUsers();
  const email = getCurrentUserEmail();

  if (!email || !users[email]) {
    return null;
  }

  users[email] = {
    ...users[email],
    orders: (users[email].orders || []).filter((order) => order.id !== orderId)
  };

  saveUsers(users);
  return users[email];
}
