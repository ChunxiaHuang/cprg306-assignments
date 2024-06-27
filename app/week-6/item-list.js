"use client"
import { useState } from "react";
import Item from "./item";


export default function ItemList({itemList}){

    const items = [...itemList];

    let [sortBy, setSortBy] = useState("name");

    // sorting
    const sortedList = items.sort( (a,b) => {
      
      let valueA = a[sortBy].toUpperCase();
      let valueB = b[sortBy].toUpperCase();

      if (valueA  < valueB){
        return -1;
      }
      if (valueA  > valueB){
        return 1;
      }
      return 0;
    });
    
    let handleNameButton = (event) => setSortBy(event.target.value);
    let handleCateButton = (event) => setSortBy(event.target.value);


    let activeStyle = "ml-2 px-5 py-1  text-teal-100 bg-yellow-500 rounded";
    let inactiveStyle = "ml-2 px-5 py-1  text-teal-100 bg-yellow-700 rounded";

      return(
        <div className="p-2">
          <label className="ml-4 text-teal-100">Sort By:</label>
          <button className={sortBy == "name" ? activeStyle : inactiveStyle} value="name" 
            onClick={handleNameButton}>Name</button>
          <button className={sortBy == "category" ? activeStyle : inactiveStyle} value="category" 
            onClick={handleCateButton}>Category</button>
          {//<button className={sortBy == "category" ? activeStyle : inactiveStyle} value="groupedCategory" 
            //onClick={handleGroupButton}>Grouped Category</button>
          }
          {sortedList.map((item) => (
            <Item item={item}/>
          ))}
        </div>
      );
}