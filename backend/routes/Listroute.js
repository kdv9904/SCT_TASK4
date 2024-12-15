import Router from 'express';
import {deleteList, getList, saveList, updateList} from './../controller/ListController.js';
const router=Router();
router.get('/',getList);
router.post('/save',saveList);
router.post('/update',updateList);
router.post('/delete',deleteList);
export default router;