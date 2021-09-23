import WilderSchema from "../models/wilders";

import { Request, Response } from "express";

export const getAllWilders = {
    find: async (req : Request, res : Response) => {
        try{
            const result = await WilderSchema.find();
            if (!result) return res.json({ success: false, 'result': "No wilders found"})
            return res.json({ sucess: true, result})
        }catch(e){
           return res.json({ success: false, result: e})
        }
    },
}
