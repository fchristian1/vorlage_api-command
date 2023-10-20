export type IsAuthenticated = boolean;

export const checkAuthentication = (sessionToken: string): IsAuthenticated => {
  if (sessionToken != "") return true;
  return false;
};
