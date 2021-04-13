import React,{useEffect,useState,useContext} from 'react'
import { useParams } from 'react-router-dom';
import { MyContext } from '../../App';



export default function OfferUser() {
    const {userData}=useContext(MyContext)
    const { chefId } = useParams();

    const [chefDish,setChefDish] = useState([])
    //const [show,setShow]=useState(false)

    useEffect(() => {
       
        fetch(`http://localhost:5000/dishes/${chefId}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.success) {
    
            setChefDish(result.dishes)
          } else {
            console.log(result.message);
          }
        })

        .catch((err) => console.log(err));

  }, [])



    return (
        <div>
            <h1>OFFERS</h1>
            <div className="dishCat">
                {chefDish.map((dish)=>{
                if (dish.chefId === chefId) {
                   // if(dish.id === userData.id)
                    return(
                <div>
                    <h1>{dish.category}</h1>
                    <hr/>
                    <div className="dishCd">
                         <h1>{dish.name}</h1>
                        <img src={dish.img} alt=""/>
                        <h3>{dish.price}</h3>
                        <div className="tapBtn">
                            <button>Order</button>
                            <button>Rate</button>
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
