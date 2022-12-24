import React from 'react';
import styled from 'styled-components';
import ItemCard from '../CardOfItem/ItemCard';


const Korzina = ({tovar, setTovar, filtered}) => {

  return(
    <>
    {filtered.length <= 0 ? null :
      <CountText>Total Count :
        <span>
          {filtered.reduce((acc, el) => acc += el.price,0)}
        </span>
      </CountText>}

      <WrapFlex>
          {filtered.length <= 0 
          ?
          <span>No items here...</span> 
          : 
          filtered.map((el, id) => 
            <ItemCard 
                key={el.id}
                title={el.title}
                id={el.id}
                tovar={tovar}
                setTovar={setTovar}
                bye={false}
                price={el.price} />
            )}
      </WrapFlex>
    </>
  )
}
const CountText = styled.div`
  text-align: center;
  font-size:25px;
  font-weight: 700;
`

const WrapFlex = styled.div`
  display: flex;
  flex-wrap:wrap;
  padding: 10px;
`
export default Korzina