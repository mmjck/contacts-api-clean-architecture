import { ContactRepository } from "../interfaces/repositories/contact-repository";
import { GetAllContactsUseCase } from "../interfaces/usecases/get_all_contacts_use_case";
import { ContactResponseModel } from "../models/contact";

export class GetAllContacts implements GetAllContactsUseCase {
    contactRepository: ContactRepository
    constructor(contactRepository: ContactRepository) {
        this.contactRepository = contactRepository
    }

    async execute(): Promise<ContactResponseModel[]> {
        const result = await this.contactRepository.get()
        return result;
    }

}