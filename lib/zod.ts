import {object, string} from "zod";

export const  SignInSchema= object({
   
    email: string().email("Invalid Email Address"),
    password: string().min(8, "password must be more then 8 character").max(50, "password to long"),
});



export const  RegisterSchema= object({
    name: string().min(5, "Name Must be more than 1 character"),
    password: string().min(8, "password must be more then 8 character").max(50, "password to long"),
    ComfirmPassword: string().min(8, "password must be more then 8 character").max(50, "password to long"),
    email: string().email("Invalid Email Address")
    }
).refine((data)=>data.password===data.ComfirmPassword, {
    message:"password does not match",
    path:["ComfirmPassword"],
});
