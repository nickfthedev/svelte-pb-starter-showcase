  export const menuTree = [
    { name: "Start", href: "/", subMenu: null, authRequired: false },
    { name: "My Projects", href: "/my/projects", subMenu: null, authRequired: true },

    {
      name: "Info",
      href: "#",
      authRequired: false,
      subMenu: [
        {
          name: "Terms",
          href: "/legal/terms",
          subMenu: null,
          authRequired: false,
        },
                {
          name: "Privacy",
          href: "/legal/privacy",
          subMenu: null,
          authRequired: false,
        },
                {
          name: "Legal Notice",
          href: "/legal/notice",
          subMenu: null,
          authRequired: false,
        },
        // {
        //   name: "Privacy",
        //   href: "/legal/privacy",
        //   authRequired: false,
        //   subMenu: [
        //     {
        //       name: "LinkSubSub1",
        //       href: "",
        //       subMenu: null,
        //       authRequired: false,
        //     },
        //   ],
        // },
      ],
    },

    //{ name: "Login", href: "/auth/login", subMenu: null },
    //{ name: "Register", href: "/auth/register", subMenu: null },
  ];