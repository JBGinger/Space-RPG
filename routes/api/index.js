const router = require("express").Router();

const userRoutes = require("./user-routes");
const itemRoutes = require("./item-routes");
// const planetRoutes = require("./planet-routes");
// const inventoryRoutes = require("./inventory-routes");

router.use("/users", userRoutes);
router.use("/items", itemRoutes);
// router.use("/planets", planetRoutes);
// router.use("/inventory", inventoryRoutes);

module.exports = router;