"use client"
import { useState } from "react";
import Item from "./item";
import itemData from "./items.json";


export default function ItemList(){

    let itemArray = itemData.map( (item) => ({...item}));

    let [sortBy, setSortBy] = useState("name");

    // sorting
    itemArray = itemArray.sort( (a,b) => {
      
      let nameA = a[sortBy].toUpperCase();
      let nameB = b[sortBy].toUpperCase();
      let categoryA = a[sortBy].toUpperCase();
      let categoryB = b[sortBy].toUpperCase();

      if (sortBy === "name"){
        if (nameA < nameB){
          return -1;
        }
        if (nameA > nameB){
          return 1;
        }
        return 0;
      }else if (sortBy === "category"){
        if (categoryA < categoryB) {
          return -1;
        }
        if (categoryA > categoryB) {
          return 1;
        }
        return 0;
      }
    });
    
    let handleNameButton = (event) => setSortBy(event.target.value);
    let handleCateButton = (event) => setSortBy(event.target.value);
    let handleGroupButton = (event) => setSortBy(event.target.value);

    let activeStyle = "ml-2 px-5 py-1  text-teal-100 bg-yellow-500 rounded";
    let inactiveStyle = "ml-2 px-5 py-1  text-teal-100 bg-yellow-700 rounded";

      return(
        <div className="p-2">
          <label className="ml-4 text-teal-100">Sort By:</label>
          <button className={sortBy == "name" ? activeStyle : inactiveStyle} value="name" 
            onClick={handleNameButton}>Name</button>
          <button className={sortBy == "category" ? activeStyle : inactiveStyle} value="category" 
            onClick={handleCateButton}>Category</button>
          {itemArray.map((item) => (
            <Item item={item}/>
          ))}
        </div>
      );
}