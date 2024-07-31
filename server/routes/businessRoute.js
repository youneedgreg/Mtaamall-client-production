import express from "express";
import { createBusiness, getAllBusinesses, getBusiness } from "../controllers/bizCntrl.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/create", jwtCheck,  createBusiness)
router.get("/allbiz", getAllBusinesses)
router.get("/:id", getBusiness)
export {router as businessRoute}