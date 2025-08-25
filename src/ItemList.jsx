import React, {memo} from "react"

function ItemList({items}){
console.log('render ItemList')
    return (
    <ul>
       {items.map((item)=>(
        <li key={item.id}>
            {item.text}
        </li>
       ))}
    </ul>
    )
}

export default memo(ItemList)