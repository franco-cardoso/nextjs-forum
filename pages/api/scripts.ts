import * as jose from "jose";

export const createToken = async (userID: string): Promise<string> => {
    return await new jose.SignJWT({ userID })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("30d")
        .sign(new TextEncoder().encode(`secret-key-phrase`));
};
