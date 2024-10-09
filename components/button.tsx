"use client";
import Link from "next/link"
import { useFormStatus } from "react-dom";


export const LoginButton = () => {
    const { pending } = useFormStatus();

    return (
        <div>
            <button type="submit" className="w-full  px-2 py-2.5 bg-blue-500 hover:bg-blue-900 font-medium text-white rounded-lg text-center uppercase">
                {pending ? "Authenticating..." : "Sign In"}
            </button>
        </div>
    )
}

export const RegisterButton = () => {
    const { pending } = useFormStatus();

    return (
        <div>
            <button type="submit" className="w-full  px-2 py-2.5 bg-blue-500 hover:bg-blue-900 font-medium text-white rounded-lg text-center uppercase">
                {pending ? "Registering..." : "Register"}
            </button>
        </div>
    )
}
