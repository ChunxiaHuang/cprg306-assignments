"use client"

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page(){

    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
    // Sign in to Firebase with GitHub authentication
    async function handleSignIn(){
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }   
    }
 
    // Sign out of Firebase
    async function handleSignOut(){
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }   
    }

    const buttonStyles = `bg-teal-500 border-2 border-teal-900 hover:bg-teal-600 
    active:border-teal-500 
    rounded-lg w-48 p-2 m-5 text-white font-bold`;
 
return(
    <main className="bg-teal-900 h-screen">
        { user ? (
            // Display some of the user's information
            <div>
                <p className="text-teal-100 ml-5 py-5">Welcome, {user.displayName} ({user.email})</p>
                <p className="text-teal-100 ml-5">Click the link below to view the shopping list</p>
                <p className="text-teal-100 text-lg font-bold pl-5 hover:text-teal-600 "><Link href="./week-10/shopping-list">Shopping List</Link></p>
                <button 
                onClick={handleSignOut}
                className={buttonStyles}
                >Sign Out</button>
            </div>
            
        ) : (
            <div>
                <p className="text-teal-100 ml-5 pt-5">Please sign in to view the shopping list.</p>
                <button onClick={handleSignIn}
                        className={buttonStyles}
                >Sign In</button>
            </div>
        )}
    </main>
    
);
}
