import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import { shoppingItems } from '../ShopUs';

  
  export default function Details() {
    let {id} = useParams();
    let found = shoppingItems.find(myElement => myElement.id == id )
  return (
    <div>
      it is detail of product with id {id}
      <h2>{found.detail}</h2>
      <p>{found.product}</p>

    </div>
  )
}
