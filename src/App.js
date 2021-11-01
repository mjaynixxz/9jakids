import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './Search'
import Item from './Item';


function App() {
  const [searchItem, setSearchItem] = useState("")
  const [responded, setResponded] = useState([])
  const [filterGroup, setFilterGroup] = useState("")
  const [filterLevel, setFilterLevel] = useState("")

  useEffect(() => {
    async function getUrl () {
      let url1 = "https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter"
      let url = `${url1}`
      try {
        const getData = await axios.get(url, { crossdomain: true})
      console.log(getData.data)
      setResponded(getData.data)
      } catch (error) {
        console.log(error)
      }
  }
  getUrl()
  }, [searchItem])


  
const onclickGroup = (e) => {
  return (
   setFilterGroup("Group")
   
  )
}


const onclickLevel = (e) => {
  return (
    setFilterLevel("Level")
  )
}

  const onChange = (e) => {
    return (
      setSearchItem(e.target.value)
    )
  }


  return (
    <>
      <Search onChange={onChange} onclickGroup={onclickGroup} onclickLevel={onclickLevel}  />
      
      {responded?.filter(item => {
        if (searchItem === "") {
          return null;
        } else if (item.Topic.toLowerCase().includes(searchItem.toLowerCase())) {
          return item;
        }
        else if (item.Topic.toLowerCase().includes(searchItem.toLowerCase()) && responded.filter(i => i.filterGroup)) {
          return item
        }
      })?.map((item, index) => {
        return <Item key={index} title={item.GameTitle} image={item.GameImage} description={item.GameDescription} />
      })}
      
    </>
  );
}

export default App;
