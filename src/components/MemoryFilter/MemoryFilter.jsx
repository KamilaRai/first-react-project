import { useContext, useEffect, useState } from "react"
import { productContext } from "../../contexts/ProductContext"
import history from "../../helpers/history"

const MemoryFilter = () => {

const getMemoryValue = () => {
    const serach = new URLSearchParams(history.location.search)
    return serach.get("memory")
}

const [memoryValue, setMemoryValue] = useState(getMemoryValue())
const {memoryFilter} = useContext(productContext)    

useEffect(() => {
memoryFilter(memoryValue)
}, [memoryValue])

return (
    <div>
        <input defaultChecked={memoryValue === "64"} name="memory" type="radio" onClick={() => setMemoryValue("64")} /> 64GB
        <input defaultChecked={memoryValue === "128"} name="memory" type="radio" onClick={() => setMemoryValue("128")}/>  128 GB
        <input defaultChecked={memoryValue === "512"} name="memory" type="radio" onClick={() => setMemoryValue("512")}/>  512 GB
        <input defaultChecked={memoryValue === "1024"} name="memory" type="radio" onClick={() => setMemoryValue("1024")}/> 1024 GB
    </div>
 )
}

export default MemoryFilter