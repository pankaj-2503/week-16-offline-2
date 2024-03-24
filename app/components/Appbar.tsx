import { useRouter } from "next/navigation"
import {signIn,signOut, useSession} from "next-auth/react";

export const Appbar=()=>{
    const router=useRouter();
    const session=useSession();
    return <div className="flex flex-start mx-6 my-8 gap-3">
        <button onClick={()=>{
            signIn();
        }} className="bg-blue-600 rounded-sm p-1 hover:bg-blue-800 ">Signin</button>
        <button onClick={()=>{
            signOut();
        }} className="bg-blue-600 rounded-sm p-1 hover:bg-blue-800 ">Logout</button>
        {JSON.stringify(session)}
    </div>
}