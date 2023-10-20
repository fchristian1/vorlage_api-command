interface IsAuthenticated extends boolean {
  check: boolean;
}

export const checkAuthentication = (sessionToken: string): IsAuthenticated => {
  let auth: IsAuthenticated;

  return auth;
};
