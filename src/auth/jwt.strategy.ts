import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt"
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly databaseService : DatabaseService
    ){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration : false,
            secretOrKey : 'Secret',
        });
    }

    async validate ( payload : {email : string} ){
        
        // console.log(payload);

        if ( !payload || !payload.email) { // added by chatGPT
            throw new UnauthorizedException();
        } 

        const user = await this.databaseService.user.findUnique({
            where : {
                email : payload.email
            },
        });

        if( !user ){ // added by chatGPT
            throw new UnauthorizedException();
        }
        return user;
    }
}