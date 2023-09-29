export const authPrefix = "/auth";

export const routes = {
  main: {
    landing: "/",
    tos: "/tos",
    privacy: "/privacy",
    signin: authPrefix + "/signin",
    signup: authPrefix + "/signup",
    forgotPassword: authPrefix + "/forgot-password",
    dashboard: "/dashboard",
    error: "/error",
  },
  dashboard: {
    challenges: "/dashboard/challenges",
    contacts: "/dashboard/contacts",
    settings: "/dashboard/settings",
    billing: "/dashboard/settings/billing",
  },
};

export const appNavigation = {
  app: [
    {
      title: "Retos",
      href: routes.dashboard.challenges,
    },
  ],
  settings: [
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "user",
    },
    {
      title: "Billing",
      href: "/dashboard/settings/billing",
      icon: "creditCard",
    },
  ],
};
