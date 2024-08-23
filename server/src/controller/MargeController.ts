import { Request,Response,NextFunction } from "express";
import MargeService from "../service/MargeService";

class MargeController{ 

    async getItems(req:Request,res:Response,next:NextFunction){ 

      try{ 

        const margeItems = req.body

        if(!margeItems){ 
            next()
        }

        const result = await MargeService.mathMarge(margeItems)

      }catch(e:any){ 
        return next(e)
      }
       
    }

}
export default MargeController