/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<{
        user: import("mongoose").Document<unknown, {}, import("src/users/schemas/user.schema").User> & import("src/users/schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        };
        token: string;
    }>;
    login(email: string, password: string): Promise<{
        user: import("mongoose").Document<unknown, {}, import("src/users/schemas/user.schema").User> & import("src/users/schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        };
        token: string;
    }>;
    forgotPassword(email: string, host: string): Promise<import("mongoose").Document<unknown, {}, import("src/users/schemas/user.schema").User> & import("src/users/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    resetPassword(token: string, password: string): Promise<import("mongoose").Document<unknown, {}, import("src/users/schemas/user.schema").User> & import("src/users/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    sayHello(user: any): any;
}
