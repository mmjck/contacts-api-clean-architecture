import { ContactRequestModel, ContactResponseModel } from "../../../domain/models/contact";

export interface ContactDataSource {
    create(contact: ContactRequestModel): void;
    getAll(): Promise<ContactResponseModel[]>;
    delete(id: string): void;
    update(id: string, data: ContactRequestModel): void;
    findById(id: string):  Promise<ContactResponseModel | null>;
}