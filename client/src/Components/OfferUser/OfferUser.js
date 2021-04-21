import React,{useEffect,useState,useContext} from 'react'
import { useParams ,Link} from 'react-router-dom';
//import { MyContext } from '../../App';
import NavUser from '../NavUser/NavUser';




export default function OfferUser() {
    //const {setChefUid, chefUId}=useContext(MyContext)
    const { chefId } = useParams();

    const [chefDish,setChefDish] = useState([])
    //const [show,setShow]=useState(false)
    console.log(chefId);

    useEffect(() => {
       
        fetch("http://localhost:5000/dishes/allDishes")
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
            <NavUser/>
            
            <div className="BstOff">
                <h1>NEW OFFERS</h1> 
                <hr/>
                <h2>Grill</h2> 
                
                {chefDish.map((dish)=>{
                    
                 if (dish.chefId === chefId && dish.category==="Grill") {

                    return(
                    
                    <div className="OfCard">
                         <h2>{dish.name}</h2>
                        <img src={dish.img} alt="image" width="350" height="400"  />
                        <h3>{dish.price}$</h3>
                        <div className="btn">
                        <Link to={"#"}>
                            <button /* onClick={()=> setChefUId()} */> Rate </button>
                        </Link>
                        <Link to={`/dishItem/${dish._id}`}>
                            <button >More</button>
                        </Link>
                        </div>
                    </div>
                
                )
              } 
                })}
            </div>
            <hr/>
            <div className="BstOff">
                    <h2>Vegetarian</h2  > 

                {chefDish.map((dish)=>{
                    
                 if (dish.chefId === chefId && dish.category==="Vegetarian") {

                    return(
                    
                    <div className="OfCard">
                         <h2>{dish.name}</h2>
                        <img src={dish.img} alt="image" width="350" height="400"  />
                        <h3>{dish.price}$</h3>
                        <div className="btn">
                        <Link to={"#"}>
                            <button /* onClick={()=> setChefUId()} */> Rate </button>
                        </Link>
                        <Link to={`/dishItem/${dish._id}`}>
                            <button >More</button>
                        </Link>
                        </div>
                    </div>
                )
              } 
                })}
            </div>
        </div>
    )
}
