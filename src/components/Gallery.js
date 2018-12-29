import React from 'react'
import Card from "./Card";

export default ({items, itemsPath}) =>
    <ul>{items.map(item =>
        <li key={item.data.slug}>
            <Card path={itemsPath} item={item}/>
        </li>)}
    </ul>
