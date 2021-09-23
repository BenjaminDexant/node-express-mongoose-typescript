import WilderSchema from "../models/wilders";

import { Request, Response } from "express";

export const createWilder = {
    create: async (req : Request, res : Response) => {
        try {
            const wilder = new WilderSchema(req.body);
            const result = await wilder.save();
            return res.json({ succes: true, result: result })
        } catch (error) {
            return res.json({ succes: false, result: error })
        }
    }
}
