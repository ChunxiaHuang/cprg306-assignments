"use client"

import { useState } from "react";
import { addItem, getItems } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function NewItem({onAddItem}){


    const buttonStyles = `bg-teal-500 border-2 border-teal-900 hover:bg-teal-600 
    active:border-teal-500 
    rounded-lg w-full p-2 text-white font-bold`;

    const { user } = useUserAuth();
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = async (event) => {
        event.preventDefault();
        let newItem = {
            //id: "randomId",
            name: itemName ,
            quantity: quantity,
            category: category,
        }
        //alert(`Added item: ${newItem.name}, quantity: ${newItem.quantity}, category: ${newItem.category}`);
    
        //onAddItem(newItem);
        await addItem(user.uid, newItem);
        onAddItem();

        setItemName("");
        setQuantity(1);
        setCategory("produce");
    };

    const handleItemName = (event) => setItemName(event.target.value);
    const handleQuantity = (event) => setQuantity(event.target.value);
    const handleCategory = (event) => setCategory(event.target.value);
    
    //let formStyle = "bg-teal-900 max-w-sm min-w-64 w-full p-5 m-4 h-48";

    return(
        <form className="bg-teal-900 w-96 p-5 m-4 h-48" onSubmit={handleSubmit}>
            <div>
                <input required onChange={handleItemName} className="border-2 rounded-lg p-2 w-full" placeholder="Item name" value={itemName}></input>
            </div>
            <div className="flex justify-between my-2">
                <input onChange={handleQuantity} className="border-2 rounded-lg p-2 w-16 mr-2" type="number" defaultValue={1} min={1} step={1} value={quantity}/>
                <select onChange={handleCategory} className="border-2 rounded-lg p-2" value={category}>
                    <option value="" disabled>Category</option>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="horsehold">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button className={buttonStyles}>+</button>
        </form>
    );
}