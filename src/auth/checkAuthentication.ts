interface IsAuthenticated {
  check: boolean;
}

export const checkAuthentication = (sessionToken: string): IsAuthenticated => {
  let auth: IsAuthenticated = { check: false };

  return auth;
};
