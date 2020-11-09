import {Module} from "@nestjs/common";
import {PassportModule} from "@nestjs/passport";

import {UserModule} from "../user/user.module";
import {JwtGoogleStrategy} from "./strategies";

@Module({
  imports: [UserModule, PassportModule],
  providers: [JwtGoogleStrategy],
})
export class AuthModule {}
