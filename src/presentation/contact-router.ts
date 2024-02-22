import express from "express";
import { Request, Response } from 'express'

import { CreateContactUseCase } from "../domain/interfaces/usecases/create-contact-use-case";
import { GetAllContactsUseCase } from "../domain/interfaces/usecases/get-all-contacts-use-case";

export default function ContactsRouter(
    getAllContactsUseCase: GetAllContactsUseCase,
    createContactUseCase: CreateContactUseCase
) {
    const router = express.Router()


    router.get("/", async (req: Request, res: Response) => {
        try {
            const response = await getAllContactsUseCase.execute();
            res.send(response)
        } catch (err) {
            res.send(500).send({ message: "Error fetching data" })
        }
    })

    router.post("/", async (req: Request, res: Response) => {
        try {
            await createContactUseCase.execute(req.body);
            res.statusCode = 201
            res.json({ message: "Created" })
        } catch (err) {
            console.log(err);
            res.status(500).send({ message: "Error saving data" })
        }
    })
}