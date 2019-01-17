import React from "react";
import List from "./List";


export default ({items, name, filter}) =>
    <List items={items.filter(item => !filter || filter.includes(item.data.slug))}
          itemPath={`/portfolio?${name}`}/>
