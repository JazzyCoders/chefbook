
const DishesData = require("../model/dishesModel")


exports.getAllDishes= async(req,res,next)=>{   
    try {
        let allDishes =  await DishesData.find()
        res.status(200).send({ success:true,dishes:allDishes})
    } catch (err) {
        next(err)
    }

}


exports.postAddNewDish= async(req,res,next)=>{
    console.log(req.body)

    try {
        const dish = new DishesData(req.body);
        await dish.save(); //store data into database
        res.status(200).send({ success:true, dishes:dish });
      } catch (err) {
        console.log(err.message);
        next(err);
      }


    /* try {
        const dish = new DishesData(req.body)
        await dish.save() 
        //let token = await dish.generateAuthToken()
        //let publicDish = await dish.getPublicFields()
        res.status(200).send({success:true,message:"new dish"})
    } catch (error) {
        console.log(error.message);
        next(error)
    }  */

  
}

exports.putUpdateDish= async(req,res,next)=>{
    const {id} = req.params

    try {
        const updateDish = await DishesData.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).send({success:true,dishes:updateDish})
    } catch (err) {
        console.log(err.message);
        next(err)
    }

}


exports.deleteSingleDish= async(req,res,next)=>{
    const {id} = req.params
   
    try {
        const dishDelete = await DishesData.findByIdAndDelete(id)
        if (dishDelete) {
            res.status(200).send({success:true,dishes:dishDelete})
        } else {
            res.status(404).send("this dish already deleted")
        }

    } catch (err) {
        next(err)
    }
   
  
}

exports.getSingleDish= async(req,res,next)=>{
    const {id} = req.params

   try {
       const oneDishD = await DishesData.findById(id).select("-_id -__v")
        if (oneDishD) {
            res.status(200).send({success:true,oneDishD})
        } else{
            res.status(404).send("this dish ID is not found")
        }

   } catch (err) {
       next(err)
   }
   
   
}
