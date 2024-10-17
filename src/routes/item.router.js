/*
How the Paths Work
app.use('/api/item', usersRouter)
This means that all routes defined in the usersRouter will be prefixed with /api/item.

Router Paths in item.router.js

router.get('/') → This matches GET /api/item/.
router.post('/') → This matches POST /api/item.
router.get('/:id') → This matches GET /api/item/:id (for example, /api/item/1)
*/

import { Router } from "express";
import { getItem, postItem } from "../controller/item.controller.js";
import ensureAuthenticated from "../middleware/tokenization.js";
const router = Router();

router.get('/',ensureAuthenticated,getItem)
router.post('/',postItem)

export default router;

