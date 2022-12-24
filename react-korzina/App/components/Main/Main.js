import React, { useState, useEffect } from 'react'
import ItemCard from './CardOfItem/ItemCard';
import styled from 'styled-components';
import { Routes, Route  } from "react-router-dom";
import Korzina from './Korzina/Korzina';

const Main = ({setCounter}) => {
    const [data, setData] = useState([]);
    const [tovar, setTovar] = useState([]);

    const ids = tovar.map(o => o.id)
    const filtered = tovar.filter(({id}, index) => !ids.includes(id, index + 1))

    const CountTovar = () => {
        setCounter((prev) => prev = filtered.length)
    }
    useEffect(() => {
        const FetchCards = () => {
            let countItems = 10;
            let url = `https://dummyjson.com/carts/?limit=${countItems}`;
            fetch(url)
                .then(res => res.json())
                .then(res => setData(res.carts))
        }
        FetchCards();
        CountTovar();
    },[])
    useEffect(() => {
        CountTovar();
    },[tovar])
    

  return (
    <div>
        <Routes>
            <Route 
                path="/" 
                element={<CardsListItems 
                    tovar={tovar}
                    setTovar={setTovar}
                    data={data}/>} />

            <Route 
                path="korzina" 
                element={<Korzina
                    filtered={filtered}
                    tovar={tovar}
                    setTovar={setTovar} />} />
        </Routes>
        
    </div>
  )
}

const CardsListItems = ({data, tovar, setTovar }) => {
    return(
        <>
            <ListWrap>
                {data.length > 0 ? data.map((el, id) => 
                <ItemCard 
                    key={el.id}
                    title={el.products[0].title}
                    id={el.id}
                    tovar={tovar}
                    setTovar={setTovar}
                    bye={true}
                    price={el.products[0].price} />
                ) : <span>Loading...</span>}
            </ListWrap>
        </>
    )
}

const ListWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export default Main