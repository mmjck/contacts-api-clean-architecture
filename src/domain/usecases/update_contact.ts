import { ContactRepository } from "../interfaces/repositories/contact-repository";
import { UpdateContactUseCase } from "../interfaces/usecases/update_contact_use_case";
import { ContactRequestModel, ContactResponseModel } from "../models/contact";

export class UpdateContact implements UpdateContactUseCase {
    contactRepository: ContactRepository
    constructor(contactRepository: ContactRepository) {
        this.contactRepository = contactRepository
    }
    async execute(id: string, contact: ContactRequestModel) {
        await this.contactRepository.update(id, contact)
    }




}