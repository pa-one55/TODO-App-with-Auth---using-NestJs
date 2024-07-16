import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class LoginDto{

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email : string
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password : string
}

// kya kaam kya hai bc DTO files ka  ??
// type checking ??
// inka use service files me karte hain
// ex : 
//   async register( registerData: RegisterUserDto ) 
// type checking ??
// thats what i think
// directly data model se nhi kar sakte kya ??
// 