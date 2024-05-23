import ItemList from "./item-list";


export default function Page(){

    return(
        <main className="bg-teal-900">
            <h1 className="text-3xl font-bold text-teal-100 px-4 pt-4">Shopping List</h1>
            <ItemList/>
        </main>
    );
}