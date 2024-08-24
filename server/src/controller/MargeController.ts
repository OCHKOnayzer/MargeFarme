import { Request,Response,NextFunction } from "express";
import MargeService from "../service/MargeService";

class MargeController{ 

  static async getItems(req:Request,res:Response,next:NextFunction){ 

      try{ 

        const margeItems = req.body

        if(!margeItems){ 
            next()
        }

        const result = await MargeService.mathMarge(margeItems)

        res.json(result)
      
      }catch(e:any){ 
        return next(e)
      }
       
    }

}
export default MargeController