import React,{ useState, useEffect } from "react";
import './style.css';
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MyCard from "./MyCard";

const MyTabs = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [filer, setFilter] = useState([]);

  useEffect(() => {
    const getData = () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res))
    };
    getData();
  },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab onClick={() => setFilter(prev => data.filter((el, id) => el.id > 4)) } label="Item One" />
          <Tab onClick={() => setFilter(prev => data.filter((el, id) => el)) } label="Item One" />
          <Tab onClick={() => setFilter(prev => data.filter((el, id) => el.id > 7)) } label="Item One" />

        </Tabs>
      </Box>

      <div className="container">
        {data.length <= 0 ? <span>Loading...</span> :
        filer.length >= 1 ? 
          filer.map((el, id) => 
          <MyCard 
            key={id}
            name={el.name} 
            email={el.email} 
            username={el.username} 
            company={el.company.name}
            >{el.name}</MyCard>) : 

            data.filter((el, id) => el.id > 4).map((el, id) => 
            <MyCard 
              key={id}
              name={el.name} 
              email={el.email} 
              username={el.username} 
              company={el.company.name}
              >{el.name}</MyCard>)}
      </div>
    </div>
  );
};

export default MyTabs;
