const { Router } = require("express");
const { itemsGet, getItemById } = require("../controllers/items");


const router = Router();


router.get('/' ,itemsGet);
router.get('/:id', getItemById);


module.exports = router;