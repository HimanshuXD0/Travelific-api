import Auth from "../models/auth.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await Auth.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: "User already exists, you can login.",
                success: false,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Auth({ name, email, password: hashedPassword });

        await newUser.save();

        res.status(201).json({
            message: "Signup successful",
            success: true,
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};


export const signIn = async (req, res) => {
         const errorMsg = "Email or Password is wrong"
    try {
        const { email, password } = req.body;
        const user = await Auth.findOne({ email });
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!user || !isPasswordMatch) {
            return res.status(409).json({
                message: errorMsg,
                success: false,
            });
        }

        const token = jwt.sign(
            { email: user.email, _id: user._id },
            "Secert-key",
            { expiresIn: '24h' }
        )

        res.status(200).json({
            message: "Login successful",
            success: true,
            token,
            email,
            name:user.name

        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: errorMsg,
            success: false,
        });
    }
}
