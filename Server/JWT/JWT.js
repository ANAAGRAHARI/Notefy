import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

const accessSecret = process.env.ACCESS_TOKEN_SECRET 
const refreshSecret = process.env.REFRESH_TOKEN_SECRET
const accessExpiry = process.env.ACCESS_TOKEN_EXPIRY
const refreshExpiry = process.env.REFRESH_TOKEN_EXPIRY

export async function generateTokens(user) {
    return new Promise((resolve, reject) => {
        try {
            const token =   {
                accessToken: jwt.sign(user,accessSecret,{expiresIn:accessExpiry}),
                refreshToken: jwt.sign(user,refreshSecret,{expiresIn: refreshExpiry})
            }
            resolve(token);
        } catch (e) {
            console.log(e);
            reject(e);
        }
    })
}
