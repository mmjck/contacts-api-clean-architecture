export interface NoSQLDatabaseWrapper {
    find(): Promise<any[]>
    insertOne(doc: any): void;
    deleteOne(id: string): void;
    updateOne(id: string, data: Object): void
}