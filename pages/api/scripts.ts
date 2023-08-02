import jwt from "jwt-simple";
import { DateTime } from "luxon";

export const createToken = (userID: string): string => {
    return jwt.encode(
        {
            sub: userID,
            iat: DateTime.now().toMillis(),
            exp: DateTime.now().plus({ days: 30 }).toMillis(),
        },
        process.env.JWT_SECRET
    );
};
