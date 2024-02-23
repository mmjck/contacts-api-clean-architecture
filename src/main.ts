import { MongoClient } from "mongodb"
import { MongoDBContactDataSource } from "./data/data-sources/mongodb/ mongodb_conect_data_source"
import { NoSQLDatabaseWrapper } from "./data/interfaces/data-sources/nosql_database_wrapper"
import { ContactRepositoryImpl } from "./domain/repositories/contact-repository"
import { CreateContact } from "./domain/usecases/create_contact"
import { GetAllContacts } from "./domain/usecases/get_all_contacts"
import ContactsRouter from "./presentation/contact-router"
import server from "./server"


async function getMongoDS() {
    const client: MongoClient = new MongoClient("mongodb://localhost:27017/contacts")
    await client.connect()
    const db = client.db("CONTACTS_DB");

    const contactDatabase: NoSQLDatabaseWrapper = {
        find: (query) => db.collection("contacts").find(query).toArray(),
        insertOne: (doc) => db.collection("contacts").insertOne(doc),
        deleteOne: (id: String) => db.collection("contacts").deleteOne({ _id: id }),
        updateOne: (id: String, data: object) => db.collection("contacts").updateOne({ _id: id }, data)
    }

    return new MongoDBContactDataSource(contactDatabase);
}

(async () => {
    const dataSource = await getMongoDS();

    const contactMiddleware = ContactsRouter(
        new GetAllContacts(new ContactRepositoryImpl(dataSource)),
        new CreateContact(new ContactRepositoryImpl(dataSource))
    );

    // server.use("/contact", contactMiddleware)
    server.listen(4000, () => console.log("Running on http://localhost:4000"))


})()