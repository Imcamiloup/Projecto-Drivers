const { Router } = require("express");
const driversRouter = require("./driversRouter");
const teamsRouter = require("./teamsRouter");
const usersRouter = require("./usersRouter");

const router = Router();

router.use("/drivers",driversRouter);
router.use("/teams",teamsRouter);
router.use("/users",usersRouter)



module.exports = router;
