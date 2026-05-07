export type OnboardingPayload = {
  name: string;
  company: string;
  role: "CEO" | "Ops" | "IT" | "Other";
  email: string;
  niche: "restaurant" | "real-estate" | "interior-design" | "ecommerce" | "rally";
  country: "UAE" | "Saudi" | "Qatar" | "Other";
};

export type DemoProspect = OnboardingPayload & {
  heroVerb: string;
  accent: string;
};

const nicheMeta: Record<OnboardingPayload["niche"], { heroVerb: string; accent: string }> = {
  restaurant: { heroVerb: "Run your kitchen", accent: "#fbbf24" },
  "real-estate": { heroVerb: "Manage your portfolio", accent: "#64748b" },
  "interior-design": { heroVerb: "Track every project", accent: "#fb7185" },
  ecommerce: { heroVerb: "Sync orders to fulfilment", accent: "#c084fc" },
  rally: { heroVerb: "Coordinate every team", accent: "#67e8f9" },
};

export const encodeToken = (payload: OnboardingPayload) =>
  Buffer.from(JSON.stringify(payload), "utf-8").toString("base64url");

export const decodeToken = (token: string): OnboardingPayload | null => {
  try {
    const json = Buffer.from(token, "base64url").toString("utf-8");
    return JSON.parse(json) as OnboardingPayload;
  } catch {
    return null;
  }
};

// API-shaped auth service for easy backend swap later (Supabase/Brevo).
export const authApi = {
  startMagicLink: async (payload: OnboardingPayload) => {
    const response = await fetch("/api/auth/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Failed to start magic-link flow");
    }
    return (await response.json()) as {
      ok: boolean;
      token: string;
      redirectPath: string;
      message: string;
    };
  },
  getProspectFromToken: async (token: string): Promise<DemoProspect | null> => {
    const payload = decodeToken(token);
    if (!payload) return null;
    const meta = nicheMeta[payload.niche];
    return {
      ...payload,
      heroVerb: meta.heroVerb,
      accent: meta.accent,
    };
  },
};
