import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import NavUser from '../NavUser/NavUser'
import { useParams } from 'react-router-dom';
import Order from '../Order/Order';
//import { MyContext } from '../../App';




export default function Dishes() {
  const { userData,
    dishes,
    show,
    loggedUser,
    setChefUId,
    setShow,
  } = useContext(MyContext)

  const [showOrder, setShowOrder] = useState(false)
  const { dishId } = useParams()


  return (
    <div style={{ position: "relative" }}>
      <NavUser />
      {showOrder ? <Order cancel={() => setShowOrder(false)} /> : <></>}
      <div className="DshCard" >
        <div className="DsHead" >
          <h1> Spacial Offer </h1>
          <p>20% OFF</p>
        </div>
        <hr />

        {dishes.map((dish) => {

          if (dish._id === dishId) {

            return (
              <div className="DshIt" >
                <img src={dish.img} alt="images" />
                <h2>${dish.price}</h2>
                <div className="sidInfo" >
                  <h3> {dish.name} </h3>
                  <button onClick={() => setShow(!show)} >Ingredients</button>
                  {show && <div>{dish.ingredients.map((ing) => {
                    return (
                      <ul>
                        <li>{ing} </li>
                      </ul>
                    )
                  })}
                  </div>}
                  <hr />
                  <div className="btn">
                    {/* <Link to={"/order"}>
                      <button onClick={() => setChefUId()}> Order </button>
                </Link>   */}
                    <button onClick={() => { setChefUId(); setShowOrder(!showOrder) }}> Order </button>

                    <Link to={"#"}>
                      <button >Rate</button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          }
        })}

      </div>
    </div>
  )
}
