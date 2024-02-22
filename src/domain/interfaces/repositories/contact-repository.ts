import { ContactRequestModel, ContactResponseModel } from "../../models/contact";

export interface ContactRepository {
    create(contact: ContactRequestModel): void;
    delete(id: string): void;
    update(id: string, contact: ContactRequestModel): void;
    get(): Promise<ContactResponseModel[]>
    findById(id: string): Promise<ContactResponseModel> | null;
}