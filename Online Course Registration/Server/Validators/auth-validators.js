const { z } = require("zod");

// Creating an object schema..
const signupSchema = z.object({
    Username: z
    .string({ required_error: "Username is required." })
    .trim()
    .min(3, {message:'Username must be at least 3 characters long.'})
    .max(255, {message:"Username must not more 255 characters."}),

    Email: z
    .string({ required_error: "Email is required." })
    .trim()
    .email({message:"Invalid Email address."})
    .min(8, {message:'Email address must be at least 8 characters long.'})
    .max(255, {message:"Email must not more 255 characters."}),

    Password: z
    .string({ required_error: "Password is required." })
    .trim()
    .min(8, {message:'Password must be at least 8 characters long.'})
    .max(36, {message:"Password must not more 36 characters."}),

    ConfirmPasswrd: z
    .string({ required_error: "ConfirmPasswrd is required." })
    .trim()
    .min(8, {message:'ConfirmPasswrd must be at least 8 characters long.'})
    .max(36, {message:"ConfirmPasswrd must not more 26 characters."})
})


module.exports = signupSchema;