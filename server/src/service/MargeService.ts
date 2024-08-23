import MargeType from "../type";

class MargeService{ 

   static async mathMarge(margeItems:any){ 

        const Items = margeItems;

        let AllItems: any = {}

        if(Items[0].animals && Object.keys(Items[0].animals).length > 0){ 
            AllItems.animals = Items[0].animals
        }

        return Items

    }

}
export default MargeService