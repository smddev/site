import React from 'react'
import ListItem from "./ListItem";

export default ({items, itemPath}) =>
    <ul>{items.map(item =>
        <li key={item.data.slug}>
            <ListItem path={itemPath} item={item}/>
        </li>)}
    </ul>
