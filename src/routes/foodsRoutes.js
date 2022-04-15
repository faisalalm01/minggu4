const foodsRoutes = require ("express").Router();
const foodsControllers = require("../controllers/foodsControllers")
const authMiddleware = require("../helpers/authMiddleware");

foodsRoutes.get("/", 
// authMiddleware.checkLogin,
foodsControllers.getAllFoods);
foodsRoutes.post("/",
  authMiddleware.checkLogin, 
foodsControllers.postFoods);
foodsRoutes.get("/:id",foodsControllers.getDataById);
foodsRoutes.delete("/:id",            
  authMiddleware.checkLogin, 
foodsControllers.deleteDataById);
foodsRoutes.put("/:id",
  authMiddleware.checkLogin,
foodsControllers.putDataById);

module.exports = foodsRoutes;
