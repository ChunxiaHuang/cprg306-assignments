"use client"
import { useEffect, useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import { addItem, getItems } from "../_services/shopping-list-service";



export default function Page(){

    const { user } = useUserAuth();

    const [selectedItemName, setSelectedItemName] = useState("");

    // const [items, setItems] = useState(
    //     ItemData.map((item)=>({...item}))
    // );

    // const handleAddItem = (newItem) => {
    //     setItems([...items, newItem]);
    // }

    const [items, setItems] = useState(getItems(user.uid));

    useEffect( ()=>{
        if(user){
            setItems(getItems(user.uid));
        }
    }, [user])

    const handleItemSelect = (name) => {
        
        let cleanedName = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g, '').trim();
        cleanedName = cleanedName.split(',')[0].trim();
        console.log(cleanedName);
        setSelectedItemName(cleanedName);
    }

    return(
        <main className="bg-teal-900 h-full">
            <h1 className="text-3xl font-bold text-teal-100 px-6 pt-6">Shopping List</h1>
            { user ? (
                <div className="flex">
                    <div className="flex-1 max-w-sm">
                        {/* <NewItem onAddItem={handleAddItem} /> */}
                        <NewItem />
                        <ItemList itemList={items} onItemSelect={handleItemSelect}/>
                    </div>
                    <div className="flex-1 max-w-sm pt-6 pl-10">
                        <MealIdeas ingredient={selectedItemName}/>
                    </div>
                </div>
            ) : (
                <div className="h-screen">
                    <p className="text-teal-100 mt-5 px-6">You must be logged in to view this page</p>
                    <Link href="./"
                    className="text-teal-100 px-6 hover:underline">Click here to sign in</Link>
                </div>

            )}
            
        </main>
    );
}