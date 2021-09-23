import express from 'express';
import { createWilder } from '../controllers/createWilder';
import { deleteWilder } from '../controllers/deleteWilder';
import { getAllWilders } from '../controllers/getAllWilders';
import { getWilder } from '../controllers/getWilder';
import { updateWilder } from '../controllers/updateWilder';


const router = express.Router();


router.get('/', getAllWilders.find);
router.get('/:id', getWilder.find)
router.post('/', createWilder.create);
router.put('/:id',  updateWilder.update);
router.delete('/:id',deleteWilder.delete);

export default router;