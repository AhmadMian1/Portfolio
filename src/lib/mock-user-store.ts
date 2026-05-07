type StoredUser = {
  name: string;
  email: string;
  password: string;
};

declare global {
  var __mockUserStore: Map<string, StoredUser> | undefined;
}

const store = globalThis.__mockUserStore ?? new Map<string, StoredUser>();
globalThis.__mockUserStore = store;

export function createUser(user: StoredUser) {
  if (store.has(user.email)) return false;
  store.set(user.email, user);
  return true;
}

export function validateUser(email: string, password: string) {
  const user = store.get(email);
  return Boolean(user && user.password === password);
}

export function getUser(email: string) {
  return store.get(email);
}
