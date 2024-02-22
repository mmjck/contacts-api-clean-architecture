import { ContactRequestModel } from "../../models/contact";

export interface UpdateContactUseCase {
    execute(id: string, contact: ContactRequestModel): void;
}