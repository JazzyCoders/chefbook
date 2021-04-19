import React, { useContext } from "react";
import { MyContext } from "../../App";
import Nav from "../Nav/Nav";


export default function MenuChef() {
  const { dishes,loggedUser } = useContext(MyContext);

  return (
    <div>
      <Nav/>
      <h1>WELCOME!! Chef {loggedUser.firstName} </h1>
      <div>
        <div>
          <h1>Category</h1>
          <div className="cat1" >
              {dishes.map((dish)=>{
                            if (dish.chefId === loggedUser._id) {
                                return(
                                  <div className="chefMenuCd" >
                                    <h2>{dish.name}</h2>
                                    <hr/>
                                    <img src={dish.img} alt="image" width="300" height="400" />
                                    <hr/>
                                    <button>Edit</button>
                                    <button>Remove</button>
                                  </div>
                                      )
                                  }
                              })}
          </div>
            <div>
              <button> Add </button> 
            </div>
        </div>
      </div>
    </div>
  );
}
