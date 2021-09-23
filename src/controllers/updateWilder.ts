import WilderSchema from "../models/wilders";

import { Request, Response } from "express";

export const updateWilder = {
    update: async (req : Request, res : Response) => {
        try{
            const result = await WilderSchema.updateOne({_id: req.params.id}, req.body)
            if (!result) return res.json({ success: false, result: "No such wilder exists"})
            return res.json({result})
        } catch(e){
            return res.json({ success: false, result: e})
        }
    }
}
