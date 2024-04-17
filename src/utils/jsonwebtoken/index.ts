import jsonWebToken, { JwtPayload } from "jsonwebtoken";
import { AuthenticationProtocol } from "./protocol";
import { JsonWebTokenInvalidError } from "./error";

export class AuthenticationAdapter implements AuthenticationProtocol {
    private readonly jsonWebToken = jsonWebToken;

    decodeJsonWebToken(token: string): JwtPayload | JsonWebTokenInvalidError {
        try {
            return this.jsonWebToken.decode(token) as JwtPayload

        } catch {
            return new JsonWebTokenInvalidError();
        }
    }
}