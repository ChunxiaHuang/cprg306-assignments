"use client"
import { useState } from "react";
import ItemList from "./item-list";
import ItemData from './items.json';
import NewItem from "./new-item";



export default function Page(){

    const [items, setItems] = useState(
        ItemData.map((item)=>({...item}))
    );

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    return(
        <main className="bg-teal-900">
            <h1 className="text-3xl font-bold text-teal-100 px-6 pt-6">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList itemList={items}/>
        </main>
    );
}