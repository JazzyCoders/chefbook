const express = require("express")

const router = express.Router()

const { getAllOrders, postAddNewOrder, putUpdateOrder, deleteSingleOrder, getSingleOrder } = require("../controllers/ordersController")
const { auth } = require("../middlewares/anthentication")
const { isAdmin } = require("../middlewares/checkRole")

/* GET ALL OrderS FROM RESOURCES */
router.get("/", auth, isAdmin, getAllOrders)

/* POST REQUEST TO ADD NEW Order */
router.post("/", auth, postAddNewOrder)

/* PUT REQUEST TO UPDATE SIGNLE Order IN DATABASE */
router.put("/:id", auth, putUpdateOrder)

/* DELETE REQUEST TO DELETE SIGNLE Order IN DATABASE */
router.delete("/:id", auth, deleteSingleOrder)

//GET SIGNLE Order FRO  DATABASE
router.get("/:id", auth, getSingleOrder)


/* DEFAULT EXPORT */
module.exports = router