import React,{useContext} from 'react'
import { MyContext } from '../../App'


export default function Notfound() {
    const {alert}=useContext(MyContext)
    return (
        <div className="notfound">
            <h3>{alert} </h3>
        </div>
    )
}
