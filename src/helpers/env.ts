import dotnet from "dotenv";

dotnet.config();

export const PORT = Number(process.env.PORT);
console.log(PORT);
