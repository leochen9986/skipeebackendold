"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsModule = void 0;
const common_1 = require("@nestjs/common");
const tickets_controller_1 = require("./tickets.controller");
const tickets_services_1 = require("./tickets.services");
const mongoose_1 = require("@nestjs/mongoose");
const tickets_schema_1 = require("./schemas/tickets.schema");
const event_ticket_schema_1 = require("../sites/schemas/event-ticket.schema");
const email_module_1 = require("../email/email.module");
let TicketsModule = class TicketsModule {
};
exports.TicketsModule = TicketsModule;
exports.TicketsModule = TicketsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            email_module_1.EmailModule,
            mongoose_1.MongooseModule.forFeature([
                { name: tickets_schema_1.Ticket.name, schema: tickets_schema_1.TicketSchema },
                { name: event_ticket_schema_1.EventTicket.name, schema: event_ticket_schema_1.EventTicketSchema },
            ]),
        ],
        controllers: [tickets_controller_1.TicketsController],
        providers: [tickets_services_1.TicketsServices],
    })
], TicketsModule);
//# sourceMappingURL=tickets.module.js.map