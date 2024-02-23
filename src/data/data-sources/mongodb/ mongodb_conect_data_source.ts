import { ContactRequestModel, ContactResponseModel } from "../../../domain/models/contact";
import { ContactDataSource } from "../../interfaces/data-sources/contact_data_source";
import { NoSQLDatabaseWrapper } from "../../interfaces/data-sources/nosql_database_wrapper";

export class MongoDBContactDataSource implements ContactDataSource {

    private db: NoSQLDatabaseWrapper

    constructor(db: NoSQLDatabaseWrapper) {
        this.db = db
    }

    async create(contact: ContactRequestModel) {
        await this.db.insertOne(contact)
    }
    async getAll(): Promise<ContactResponseModel[]> {
        const response = await this.db.find({})

        return response.map(item => ({
            id: item._id.toString(),
            name: item.name
        }))
    }
    async delete(id: string) {
        throw new Error("Method not implemented.");
    }
    async update(id: string, data: ContactRequestModel) {
        throw new Error("Method not implemented.");
    }
    async findById(id: string): Promise<ContactResponseModel | null> {
        throw new Error("Method not implemented.");
    }

}