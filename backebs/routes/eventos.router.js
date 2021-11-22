const express = require("express")
const router = express.Router()
const eventosController = require("../controllers/eventos.controller")

router.post("/", eventosController.create)
router.get("/", eventosController.find)
router.get("/:id", eventosController.findOne)
router.put("/:id", eventosController.update)
router.delete("/:id", eventosController.remove)

module.exports = router
