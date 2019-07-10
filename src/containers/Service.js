import React from 'react'
import {withRouteData} from 'react-static'
import ItemDescription from "../components/ItemDescription";

export default withRouteData(({item}) => <ItemDescription item={item}/>)
