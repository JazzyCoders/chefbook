import axios from 'axios'
import React from 'react'

export default function Order(props) {
  /* const handleSubmitOrder = () => {
    axios.post("http://localhost:5000/orders", ,)



  } */
  return (
    <div style={{ display: "flex", backgroundColor: "rgba(64, 82, 180, 0.616)", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "50%", height: "50vh", borderWidth: "1px", borderColor: "#000", borderRadius: "20px", border: "solid", position: "absolute", top: "25vh", left: "25%" }}>

      <div style={{ fontSize: "1.5rem", padding: "20px" }}>Do you want to place an order for this dish?</div>

      <div >
        <button style={{ margin: "20px", paddingLeft: "10px", paddingRight: "10px" }}> Yes</button>

        <button style={{ margin: "20px", paddingLeft: "10px", paddingRight: "10px" }} onClick={props.cancel}> No</button>

      </div>

    </div>
  )
}