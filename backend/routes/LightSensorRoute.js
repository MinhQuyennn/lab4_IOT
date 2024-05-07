import express from "express";
const router = express.Router();
import { AddLightSensorValue } from "../controller/LightSensorController.js";

router.post("/addLightSenSorValue", AddLightSensorValue);

export default router;
