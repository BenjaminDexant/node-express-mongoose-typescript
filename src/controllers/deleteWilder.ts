import WilderSchema from "../models/wilders";

import { Request, Response } from "express";

export const deleteWilder = {
    delete: async (req : Request, res : Response) => {
        try{
            const result = await WilderSchema.remove({ _id: req.params.id})
            if (!result) return res.json({ success: false, result: "No wilder with such ID was found" })
            return res.json({ success: true, result })
        }catch(e){
            return res.json({success: false, result: e})
        }
    }
}
