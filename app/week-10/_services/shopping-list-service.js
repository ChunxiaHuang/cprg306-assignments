
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId){

    try {
        // database structure: db -> users -> userId -> items
        // place of data store
        const collectionReference = collection(db, "users", userId, "items");
        const itemQuery = query(collectionReference);
        const querySnapshot = await getDocs(itemQuery);
        let itemList = [];
        querySnapshot.forEach( (doc) => {
            let thisItem = {
                id: doc.id,
                ...doc.data()
            }
            itemList.push(thisItem);
        })
        return itemList;
    } catch (error) {
        console.log(error);
    }
}

export async function addItem(userId, newItem){

    try {
        const newItemReference = collection(db, "users", userId, "items");
        const newItemPromise = await addDoc(newItemReference, newItem);
        console.log(newItemPromise.id);
    } catch (error) {
        console.log(error);
    }
}