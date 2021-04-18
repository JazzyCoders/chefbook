import React, { useContext } from "react";
import { MyContext } from "../../App";
import Nav from "../Nav/Nav";

export default function MenuChef() {
  const { dishes, chefUId } = useContext(MyContext);

  return (
    <div>
      <Nav />
      <h1>WELCOME CHEF {} </h1>
      <div>
        {/* {dishes.map((dish)=>{

                    if (dish.chefId===chefUId) {

                        <div>

                        </div>
                    }
                })} */}
      </div>
    </div>
  );
}
