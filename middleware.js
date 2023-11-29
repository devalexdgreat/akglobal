export { default } from "next-auth/middleware";

export const config = { matcher: ["/createid", "/editid", "/admin", "/register"] };