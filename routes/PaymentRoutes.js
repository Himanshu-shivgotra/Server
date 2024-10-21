import express from 'express';
import { checkout, PaymentVerification } from '../controllers/PaymentController.js';

const router = express.Router();

// router.route("/checkout",(req,res) => {
// })

router.route("/checkout").post(checkout)
router.route("/paymentverification").post(PaymentVerification)

export default router;