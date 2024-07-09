"use client"
import { useState } from "react";
import ItemList from "./item-list";
import ItemData from './items.json';
import NewItem from "./new-item";
import MealIdeas from "../week-7/meal-ideas";



export default function Page(){

    const [selectedItemName, setSelectedItemName] = useState("");

    const [items, setItems] = useState(
        ItemData.map((item)=>({...item}))
    );

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleItemSelect = (name) => {
        
        let cleanedName = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g, '').trim();
        cleanedName = cleanedName.split(',')[0].trim();
        console.log(cleanedName);
        setSelectedItemName(cleanedName);
    }

    return(
        <main className="bg-teal-900">
            <h1 className="text-3xl font-bold text-teal-100 px-6 pt-6">Shopping List</h1>
            <div className="flex">
                <div className="flex-1 max-w-sm">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList itemList={items} onItemSelect={handleItemSelect}/>
                </div>
                <div className="flex-1 max-w-sm pt-6 pl-10">
                    <MealIdeas ingredient={selectedItemName}/>
                </div>
            </div>
        </main>
    );
}