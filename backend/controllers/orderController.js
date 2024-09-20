import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"
import Stripe from 'stripe'

// Global variables
const currency = 'inr'
const deliveryCharge = 10


// Gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// placing order using COD method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData : {}})

        res.json({success : true, message : "Order Placed"})

    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}


// placing order using Stripe method
const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body
        const { origin } = req.headers

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'Stripe',
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        const line_items = items.map((items) => ({
            price_data : {
                currency : currency,
                product_data : {
                    name : items.name
                },
                unit_amount : items.price * 100
            },
            quantity : items.quantity
        }))

        line_items.push({
            price_data : {
                currency : currency,
                product_data : {
                    name : 'Delivery Charges'
                },
                unit_amount : deliveryCharge * 100
            },
            quantity : 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url : `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url : `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode : 'payment',
        })

        res.json({success : true, session_url : session.url})

    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }

}

// verify stripe
const verifyStripe = async (req, res) => {
    const { orderId, success, userId } = req.body
    try {
        if(success === 'true') {
            await orderModel.findByIdAndUpdate(orderId, {payment : true})
            await userModel.findByIdAndUpdate(userId, {cartData : {}})
            res.json({success : true})
        } else {
            await orderModel.findByIdAndDelete(orderId)
            res.json({success : false})
        }

    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}


// placing order using Razorpay method
const placeOrderRazorpay = async (req, res) => {
    try {
        res.json({success : true, message : "This Site is Under Construction. After You Got Pan Number Please update This Page Refer V - 12:47:00"})
    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}


// All Orders Data for Admin Panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success : true, orders})

    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}


// User Orders Data for Frontend
const userOders = async (req, res) => {
    try {
        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({success : true, orders})

    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}

// update Order Status from Admin Panel
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body
        await orderModel.findByIdAndUpdate(orderId, {status})

        res.json({success : true, message : 'Status updated'})

    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOders, updateStatus, verifyStripe }