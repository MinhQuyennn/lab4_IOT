import express from "express";
const router = express.Router();
import {
  AddBoardData,
  GetAllData,
  updateStatus,
  monitorStatus,
} from "../controller/BoardController.js";

router.get("/boards", GetAllData);
router.post("/addBoard", AddBoardData);
router.put("/updateStatus/:id", updateStatus);
router.get("/getDate", monitorStatus);
export default router;
