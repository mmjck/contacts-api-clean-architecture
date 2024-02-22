import { ContactRepositoryImpl } from "./domain/repositories/contact-repository"
import { CreateContact } from "./domain/usecases/create_contact"
import { GetAllContacts } from "./domain/usecases/get_all_contacts"
import ContactsRouter from "./presentation/contact-router"
import server from "./server"

(async () => {


    const contactMiddleware = ContactsRouter(
        new GetAllContacts(new ContactRepositoryImpl()),
        new CreateContact(new ContactRepositoryImpl())
    );

    // server.use("/contact", contactMiddleware)
    server.listen(4000, () => console.log("Running on http://localhost:4000"))


})()