import { Pool } from "pg";
import { APIError, createAuthMiddleware } from "better-auth/api";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),
  emailAndPassword: {
    enabled: false
  },
  socialProviders: {
    google: {
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }
  },
  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      if (ctx.path !== "/sign-in/social") {
        return;
      }

      const allowedEmail = process.env.ALLOWED_ACCOUNT as string;
      const { email, provider } = ctx.body;

      if (provider === "google" && email !== allowedEmail) {
        throw new APIError("UNAUTHORIZED", {
          message: "You are not authorized to sign in"
        })
      }
    })
  },
  advanced: {
    cookiePrefix: "auth"
  }
})