export default (moduleName: string, ...message: any) => {
  console.log("[" + moduleName + "]", ...message);
  //send to log service
};
