

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'

export const MONGODB_URI = prod ? process.env["MONGODB_URI"] : process.env["MONGODB_URI_LOCAL"];
export const JWT_SECRET = prod ? process.env["JWT_SECRET"] : process.env["JWT_SECRET_LOCAL"];