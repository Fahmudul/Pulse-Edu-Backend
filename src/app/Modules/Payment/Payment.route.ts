import { Router } from "express";
import { PayemntController } from "./Payment.controllers";

const router = Router();

router.post("/create-payment-intent", PayemntController.createCheckOutSession);
router.post("/confirm-payment", PayemntController.ConfirmPayment);

export const PaymentRoutes = router;

