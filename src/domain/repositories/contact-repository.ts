import { ContactDataSource } from "../../data/interfaces/data-sources/contact_data_source";
import { ContactRepository } from "../interfaces/repositories/contact-repository";
import { ContactRequestModel, ContactResponseModel } from "../models/contact";

export class ContactRepositoryImpl implements ContactRepository {
    contactDataSource: ContactDataSource


    constructor(contactDataSource: ContactDataSource) {
        this.contactDataSource = contactDataSource
    }

    async create(contact: ContactRequestModel){
        await this.contactDataSource.create(contact)
    }
    
    async get(): Promise<ContactResponseModel[]>{
        return await this.contactDataSource.getAll()
    }

    delete(id: string): void {
        throw new Error("Method not implemented.");
    }
    update(id: string, contact: ContactRequestModel): void {
        throw new Error("Method not implemented.");
    }
    
    findById(id: string): Promise<ContactResponseModel> | null {
        throw new Error("Method not implemented.");
    }

}