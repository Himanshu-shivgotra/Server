import express from 'express';
import { Order } from '../models/PaymentModel.js';

const router = express.Router();


router.route("/track/:orderId").get(async (req, res) => {
    console.log(`Received request for tracking order ID: ${req.params.orderId}`)
    try {
        const order = await Order.findOne({ razorpay_order_id: req.params.orderId });
        if (order) {
            res.status(200).json({ success: true, order });
        } else {
            res.status(404).json({ success: false, message: "Order not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error });
    }
})

//route to get order update
router.route("/update/:orderId").put(async (req, res) => {
    const { status } = req.body;
    console.log(`Updating order ID: ${req.params.orderId} to status: ${status}`); // Debugging
    try {
        const order = await Order.findOneAndUpdate(
            { razorpay_order_id: req.params.orderId },
            { status },
            { new: true }
        );
        if (order) {
            res.status(200).json({ success: true, order });
        } else {
            res.status(404).json({ success: false, message: "Order not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error });
    }
});


// New route to get all orders
router.route("/").get(async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error });
    }
});


export default router;