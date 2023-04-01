import { useEffect, useState } from "react"
import API, { endpoints } from "../API"

const Header = () =>{
    const [categories, setcategories] = useState([]) 
    useEffect(()=>{
        const loadCategories = async () =>{
            let res = await API.get(endpoints['categories'])
            setcategories(res.data)
        }
        loadCategories()
    },[])
    return (
       <ul>
        {categories.map(c=><li>{c.name}</li>)}
       </ul>
    )
}

export default Header