const isLoggedIn = [
  {
    title: 'Menu',
    url: '/menu',
  },
  {
    title: 'Profile',
    url: '/profile',
  },
  {
    title: 'Log Out',
    url: '/login',
    id: 'logout',
  },
];

const isNotLoggedIn = [
  {
    title: 'Log In',
    url: '/login',
  },
  {
    title: 'Sign Up',
    url: '/signup',
  },
];

export { isLoggedIn, isNotLoggedIn };
