"use client";
import Link from "next/link";
import {signUpCredentials} from "@/lib/action";
import {useFormState} from "react-dom";
import { RegisterButton } from "@/components/button";

const FormRegister = () => {
    const [state, formAction]= useFormState(signUpCredentials, null)
  return (
    <form action={formAction} className="space-y-6 ">
        
        {state?.message ? (

        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
            <span className="font-medium">
                {state?.message}
            </span>
        </div>

        ): null } 


        <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                Name
            </label>
            <input type="text" name="name" id="name" className="bg-gray-50 border-gray-300b order rounded-lg text-gray-900  w-full p-2.5" placeholder='ades ganteng'/>
            <div aria-live="polite" aria-atomic="true">
                <span className="text-sm text-red-500 mt-2">{state?.error?.name}</span>
            </div>
        </div>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email
            </label>
            <input type="email" name="email" id="email" className="bg-gray-50 border-gray-300b order rounded-lg text-gray-900  w-full p-2.5" placeholder='ades@ri.go.id'/>
            <div aria-live="polite" aria-atomic="true">
                <span className="text-sm text-red-500 mt-2">{state?.error?.email}</span>
            </div>
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password
            </label>
            <input type="password" name="password" id="password" className="bg-gray-50 border-gray-300b order rounded-lg text-gray-900  w-full p-2.5" placeholder='*******'/>
            <div aria-live="polite" aria-atomic="true">
                <span className="text-sm text-red-500 mt-2">{state?.error?.password}</span>
            </div>
        </div>

        <div>
            <label htmlFor="ComfirmPassword" className="block mb-2 text-sm font-medium text-gray-900">
                Confirm Password
            </label>
            <input type="password" name="ComfirmPassword" id="ComfirmPassword" className="bg-gray-50 border-gray-300b order rounded-lg text-gray-900  w-full p-2.5" placeholder='*******'/>
            <div aria-live="polite" aria-atomic="true">
                <span className="text-sm text-red-500 mt-2">{state?.error?.ConfirmPassword}</span>
            </div>
        </div>


        {/* buat button */}
        <RegisterButton/>
        <div>
        <p className="text-sm font-light text-gray-500">Already have account ?
            <Link href="/login">
            <span className="font-medium pl-1 text-blue-500 hover:text-blue-900">
                Sign In
            </span>
            </Link>
        </p>
        </div>
    </form>
  )
}

export default FormRegister
