
import { signIn } from '@/auth';

import {IoLogoGithub, IoLogoGoogle} from 'react-icons/io5';

export const GoogleLoginButton = () => {
  return (
    <>
    {/* <button className="bg-white flex items-center justify-center gap-4 py-2 rounded-md">
      <IoLogoGoogle className="text-2xl text-red-500" />
      <span className="text-lg font-semibold">Login with Google</span>
    </button> */}
        <form action={async()=>{
            "use server";
            await signIn("google", {redirectTo:"/dashboard"});
        }}>

            <button type="submit" className="flex items-center justify-center gap-1 py-2.5 rounded-lg uppercase text-white font-medium text-sm bg-blue-500 w-full hover:bg-blue-900">
                <IoLogoGoogle/>
                Sign In With Google
            </button>
        </form>
    </>

  );
};

export const GithubButton = () => {
    return (
      <>
      {/* <button className="bg-white flex items-center justify-center gap-4 py-2 rounded-md">
        <IoLogoGoogle className="text-2xl text-red-500" />
        <span className="text-lg font-semibold">Login with Google</span>
      </button> */}
          <form action={async()=>{
              "use server";
              await signIn("github", {redirectTo:"/dashboard"});
          }}>
  
              <button type="submit"   className="flex items-center justify-center gap-1 py-2.5 rounded-lg uppercase text-white font-medium text-sm bg-gray-500 hover:bg-gray-900 w-full">
                  <IoLogoGithub/>
                  Sign In With Github
              </button>
          </form>
      </>
  
    );
  };
  
