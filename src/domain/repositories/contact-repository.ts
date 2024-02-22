import { ContactRepository } from "../interfaces/repositories/contact-repository";
import { ContactRequestModel, ContactResponseModel } from "../models/contact";

export class ContactRepositoryImpl implements ContactRepository {
    // contactDataSource: ContactDataSource
    create(contact: ContactRequestModel): void {
        throw new Error("Method not implemented.");
    }
    delete(id: string): void {
        throw new Error("Method not implemented.");
    }
    update(id: string, contact: ContactRequestModel): void {
        throw new Error("Method not implemented.");
    }
    get(): Promise<ContactResponseModel[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<ContactResponseModel> | null {
        throw new Error("Method not implemented.");
    }

}