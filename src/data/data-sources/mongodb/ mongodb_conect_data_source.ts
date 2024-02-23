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
        await this.db.deleteOne(id)
    }
    async update(id: string, data: ContactRequestModel) {
        await this.db.updateOne(id, data);

    }
    async findById(id: string): Promise<ContactResponseModel | null> {
        const response = await this.db.find({_id: id})
        
        if (response.length <1){
            return null
        }

        
        return response.map(item => ({
            id: item._id.toString(),
            name: item.name
        }))[0];
    }

}