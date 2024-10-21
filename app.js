import express from "express"
import { config } from "dotenv"
import paymentRoute from "./routes/PaymentRoutes.js"
import orderRoute from "./routes/OrderTrackingRoutes.js"
import cors from "cors"
// import { parsePath } from "react-router-dom"

config({ path: "./config/config.env" })

export const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoute)
app.use("/api/orders", orderRoute)

app.get("/api/getkey", (req, res) => res.status(200).json({ key: process.env.RAZORPAY_API_KEY }))