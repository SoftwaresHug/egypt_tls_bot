// Auto-generated configuration for TLS Contact Egypt AutoBot

export const config = {
  botName: "TLS Contact Egypt",
  country: "Egypt",
  provider: "TLS Contact",
  destination: "France",
  loginUrl: "https://visas-fr.tlscontact.com/en-us/login",
  centers: [
  "Cairo (Sheikh Zayed)",
  "New Cairo"
],
  visaCategories: [
  "Tourism",
  "Business",
  "Family Visit",
  "Medical",
  "Culture/Sports",
  "Transit",
  "Student",
  "Work",
  "Family Reunification",
  "EU Blue Card"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
