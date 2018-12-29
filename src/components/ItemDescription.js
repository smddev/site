import React from 'react'
import Markdown from 'react-markdown'
import {H1} from "../atoms";

export default ({item}) => <div>
    <H1>{item.data.title}</H1>
    <img className="image" src={item.data.cover} alt=""/>
    <Markdown source={item.content} escapeHtml={false}/>
</div>
