// custom Hooks creation

import { useEffect, useState } from "react"


const userFetch = (url)=>{
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch(url).then((response)=>{
            response.json().then((result)=>{
                setData(result)
            })
        })

    },[])
    return data
}

export default userFetch