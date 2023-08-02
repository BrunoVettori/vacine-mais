import { sign, verify } from "jsonwebtoken";

class Token {
  secret: string;
  expiresIn: string;

  constructor(secret: string, expiresIn: string) {
    // Constructor
    this.secret = secret;
    this.expiresIn = expiresIn;
  }

  public create(data: any): string {
    const token = sign({ data: data }, this.secret, {
      expiresIn: this.expiresIn,
    });

    return token;
  }

  public refresh(token: string): string {
    const token_verify: any = verify(token, this.secret);

    const new_token = sign({ data: token_verify["data"] }, this.secret, {
      expiresIn: this.expiresIn,
    });

    return new_token;
  }

  public verify(token: string): any {
    if (token.includes("Bearer")) {
      token = token.replace("Bearer ", "");
    }

    const token_verify = verify(token, this.secret);

    return token_verify;
  }
}

export default Token;
