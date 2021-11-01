import React, {useState, useEffect} from 'react'
import './Search.css'



const Search = ({ onChange, onclickGroup, onclickLevel }) => {

    const [isClicked, setIsClicked] = useState(false)
    const [display, setDisplay] = useState("")

    useEffect(() => {
        return isClicked ? setDisplay("") : setDisplay("display")
    },[isClicked, display])

    
    return (
        <div className="search">
            <input type="search" placeholder="Search a game topic..." onChange={onChange} />
            <div className="filter" onClick={() => setIsClicked(!isClicked)}>
            <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-filter-interface-kiranshastry-gradient-kiranshastry-1.png" alt="filter" />
            <p>filter</p>
            
        </div>
        <div className={`filter-item ${display}`}>
                <div onClick={e => onclickGroup(e)} >Game by Groups</div>
                    <div onClick={e => onclickLevel(e)}>Game by Levels</div>
                           
            </div>
        </div>
    )
}

export default Search
