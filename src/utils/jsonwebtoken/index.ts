import jsonWebToken, { JwtPayload } from "jsonwebtoken";
import { JsonWebTokenInvalidError } from "./error";

export const authenticationAdapter = {

    decodeJsonWebToken(token: string): JwtPayload | JsonWebTokenInvalidError {
        try {
            return jsonWebToken.decode(token) as JwtPayload

        } catch {
            return new JsonWebTokenInvalidError();
        }
    }
}