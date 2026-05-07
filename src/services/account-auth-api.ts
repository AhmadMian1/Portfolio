"use client";

export type SignupPayload = {
  name: string;
  email: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

async function postJson<T>(url: string, payload?: unknown): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload ? JSON.stringify(payload) : undefined,
  });

  const json = (await response.json()) as T & { message?: string };
  if (!response.ok) {
    throw new Error(json.message ?? "Request failed");
  }

  return json as T;
}

export const accountAuthApi = {
  signup: (payload: SignupPayload) =>
    postJson<{ ok: boolean; message: string }>("/api/auth/signup", payload),
  login: (payload: LoginPayload) =>
    postJson<{ ok: boolean; message: string; redirectPath: string }>("/api/auth/login", payload),
  logout: () => postJson<{ ok: boolean; message: string }>("/api/auth/logout"),
};
