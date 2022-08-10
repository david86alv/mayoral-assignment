import React, { useState } from 'react';
import { Search } from 'components/Search';
import { ProductList } from 'components/ProductList'
import { Sort } from 'components/Sort';
import { productsJSON } from "data/data";


export const App = () => {
    
    const [filterDisplay, setFilterDisplay] = useState(productsJSON);

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      } 

    const handleChange = e => {
  
        let oldList = productsJSON.map(product => { return product });

        if (e !== "") {
            let newList = [];
            newList = oldList.filter(product => removeAccents(product.name.toLowerCase()).includes(removeAccents(e.toLowerCase())));
            setFilterDisplay(newList);
        } else {
            setFilterDisplay(productsJSON);
        }
    };    

    
    const sortList = sortClick => {
        console.log('Se ha clicado')
        const sortedList = [...filterDisplay].sort((a, b) => {
            return ((sortClick == 1) ? a.salePrice - b.salePrice : b.salePrice - a.salePrice);
        });
        
        setFilterDisplay(sortedList);
    }
    
    return (
        <>
        <div className="row searchbar-container">
            <Search handleChange={e => handleChange(e.target.value)}/>
            <Sort sortList={e => sortList(e)}/>
        </div>
        <ProductList products={filterDisplay} />
        </>
    );
};