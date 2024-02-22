import { ContactRepository } from "../interfaces/repositories/contact-repository";
import { GetOneContactUseCase } from "../interfaces/usecases/get_one_contact_use_case";
import { ContactRequestModel, ContactResponseModel } from "../models/contact";

export class GetOneContact implements GetOneContactUseCase {
    contactRepository: ContactRepository
    constructor(contactRepository: ContactRepository) {
        this.contactRepository = contactRepository
    }
    async execute(id: string): Promise<ContactResponseModel | null> {
        const result = await this.contactRepository.findById(id)
        return result;
    }
}