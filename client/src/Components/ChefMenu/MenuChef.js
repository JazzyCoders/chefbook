import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../../App";
import Nav from "../Nav/Nav";


export default function MenuChef() {
  const { dishes,loggedUser } = useContext(MyContext);
  const {chefId} =useParams()

  return (
    <div>
      <Nav/>
      <div className="OfNew">
        <h1>WELCOME!! Chef {loggedUser.firstName} </h1>
        <div className="BstOff">
          <h1>Category</h1>
          <hr/>
          <h2>Grill</h2> 
          <div className="cat1" >
              {dishes.map((dish)=>{
                            if (dish.chefId === chefId) {
                              
                              if (dish.chefId === chefId && dish.category==="Grill") {

                                return(
                                
                                <div className="OfCard">
                                     <h2>{dish.name}</h2>
                                    <img src={dish.img} alt="image" width="350" height="400"  />
                                          <hr/>
                                    <div className="btn">
                                    <Link to={"#"}>
                                        <button > Edit </button>
                                    </Link>
                                    <Link to={"#"}>
                                        <button > remove </button>
                                    </Link>
                                
                                    </div>
                                </div> 
                            )
                          }
                                  }
                              })}
                        </div>
                    <div className="AddCat">
                      <button> Add </button> 
                    </div>
              </div>
          <div className="BstOff">
                    <h2>Vegetarian</h2  > 

                {dishes.map((dish)=>{
                    
                 if (dish.chefId === chefId && dish.category==="Vegetarian") {

                    return(
                    
                    <div className="OfCard">
                         <h2>{dish.name}</h2>
                        <img src={dish.img} alt="image" width="350" height="400"  />
                        <hr/>
                        <div className="btn">
                        <Link to={"#"}>
                            <button> Edit</button>
                        </Link>
                        <Link to={"/#"}>
                            <button >Remove</button>
                        </Link>
                        </div>
                    </div>
                )
              } 
                })}
                <div className="AddCatN">
                    <button> Add </button> 
                    </div>
            </div>
                    
      </div>
    </div>
  );
}
