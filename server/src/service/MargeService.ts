import MargeType from "../type";

class MargeService{ 

   static async mathMarge(margeItems:any){ 

       try{ 
        const Items = margeItems;

        let AllItems: any = {}

        if(Items[0].animals && Object.keys(Items[0].animals).length > 0){ 
            AllItems.animals = Items[0].animals
        }

        if(Items[1].plants && Object.keys(Items[1].plants).length > 0){ 
            AllItems.plants = Items[1].plants
        }

        if(AllItems.length > 0){ 
            
        }

        return Items
       }catch(e:any){ 
        return e
       }

    }

}
export default MargeService