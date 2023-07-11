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
    contacts: "/dashboard/contacts",
    settings: "/dashboard/settings",
    billing: "/dashboard/settings/billing",
  },
};

export const appNavigation = {
  app: [
    {
      title: "Dashboard",
      href: routes.main.dashboard,
    },
    {
      title: "Contacts",
      href: routes.dashboard.contacts,
    },
    {
      title: "Settings",
      href: routes.dashboard.settings,
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
