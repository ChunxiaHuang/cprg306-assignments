

export default function Item({item}){

    let {name, quantity, category} = item;

    return(
        <div className="text-teal-900 bg-teal-100 m-4 p-2 w-96">
            <ul>
                <li className="text-xl font-bold">{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}