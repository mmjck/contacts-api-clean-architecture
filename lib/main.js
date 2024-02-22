"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contact_repository_1 = require("./domain/repositories/contact-repository");
const create_contact_1 = require("./domain/usecases/create_contact");
const get_all_contacts_1 = require("./domain/usecases/get_all_contacts");
const contact_router_1 = __importDefault(require("./presentation/contact-router"));
const server_1 = __importDefault(require("./server"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const contactMiddleware = (0, contact_router_1.default)(new get_all_contacts_1.GetAllContacts(new contact_repository_1.ContactRepositoryImpl()), new create_contact_1.CreateContact(new contact_repository_1.ContactRepositoryImpl()));
    // server.use("/contact", contactMiddleware)
    server_1.default.listen(4000, () => console.log("Running on http://localhost:4000"));
}))();
