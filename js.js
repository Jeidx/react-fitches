
//state
const [data, setData] = useState(
    [{changeData : changeData},{
      name: 'jack',
      age: "11",
      id : ''
    }]
  );
//state


//add new item and give all items id
const changeData = (val , second) => {
    let obj = {
      name : val,
      age : second,
      id : ''
    }
    setData((actual) => {
      const newData = [...actual , obj]
      return (
        newData.map((el , idz) => {
          el.id = idz;
          return(
            el
          )
        })
      )
    })
  }
//add new item and give all items id



//show all items from state && and create remove button
// filter for remove id item
// map for make new id state items (after delete item  , all items get new id)
{data.map((el, id) => id>=1 ?

    <div key={id}>
      {el.name}/{el.age}
      <button onClick={() => 
        setData((prev) => 
          prev.filter(el => el.id !== id)
              .map((el , idz) => {
                el.id = idz;
                return(
                  el
              )
        })) }>
          remove
      </button>
    </div>

   : null)}
//show all items from state && and create remove button