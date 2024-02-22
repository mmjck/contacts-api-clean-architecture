import { ContactRepository } from "../interfaces/repositories/contact-repository";
import { CreateContactUseCase } from "../interfaces/usecases/create_contact_use_case";
import { ContactRequestModel } from "../models/contact";

export class CreateContact implements CreateContactUseCase {
    contactRepository: ContactRepository

    constructor(contactRepository: ContactRepository
    ) {
        this.contactRepository = contactRepository;
    }


    async execute(contact: ContactRequestModel){
        await this.contactRepository.create(contact)
    }

}