"use client";

type EventPayload = Record<string, string | number | boolean | null | undefined>;

export function trackEvent(event: string, payload?: EventPayload) {
  // Placeholder PostHog hook. Replace with posthog.capture(event, payload).
  console.info("[posthog-placeholder]", event, payload ?? {});
}
