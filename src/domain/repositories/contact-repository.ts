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

    async delete(id: string){
        await this.contactDataSource.delete(id)
    }
    async update(id: string, contact: ContactRequestModel){
            await this.contactDataSource.update(id, contact)

    }
    
    async findById(id: string): Promise<ContactResponseModel | null> {
        return await this.contactDataSource.findById(id)
    }

}