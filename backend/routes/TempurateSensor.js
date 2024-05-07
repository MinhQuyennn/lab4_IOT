import express from "express";
const router = express.Router();
import { AddTempurateSensorValue } from "../controller/TempurateController.js";

router.post("/addTempurateSenSorValue", AddTempurateSensorValue);

export default router;
