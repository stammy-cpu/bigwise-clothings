// Mock authentication with hardcoded users
export const USERS = [
  {
    id: 1,
    email: "fatahstammy@gmail.com",
    password: "@21Savage",
    name: "Admin",
    role: "admin"
  },
  {
    id: 2,
    email: "goke@stammy.org",
    password: "@21Savage",
    name: "User",
    role: "user"
  }
];

export type User = typeof USERS[0];

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

export function validateLogin(email: string, password: string): User | null {
  const user = USERS.find(u => u.email === email && u.password === password);
  return user || null;
}

export function saveUserToStorage(user: User) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

export function loadUserFromStorage(): User | null {
  const stored = localStorage.getItem("currentUser");
  return stored ? JSON.parse(stored) : null;
}

export function logoutUser() {
  localStorage.removeItem("currentUser");
}
