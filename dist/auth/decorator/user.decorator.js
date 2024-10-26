"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FUser = void 0;
const common_1 = require("@nestjs/common");
exports.FUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    if (!user)
        return undefined;
    if (data)
        return user[data];
    return user;
});
//# sourceMappingURL=user.decorator.js.map