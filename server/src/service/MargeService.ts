import MargeType from "../type";

<<<<<<< HEAD
class MargeService {
    static async mathMarge(margeItems: MargeType): Promise<MargeType | Error> {
      try {
=======
class MargeService{ 

   static async mathMarge(margeItems:any){ 

       try{ 
>>>>>>> f42d3b0cdd211754c9748e0dfdb6044634462b5a
        const Items = margeItems;
  
        let AllItems: MargeType = {};
  
        for (const key in Items) {
          if (Items.hasOwnProperty(key)) {
            const currentArray = Items[key];
  
            if (currentArray && currentArray.length > 0) {
              const calculatedArray = this.calculateItems(currentArray);
              AllItems[key] = calculatedArray;
            }
          }
        }
  
        if (Object.keys(AllItems).length > 0) {
          console.log(AllItems);
        }
  
        return AllItems;
      } catch (e: any) {
        return e;
      }
    }
  
    static calculateItems(items: Array<{ [key: string]: number }>): Array<{ [key: string]: number }> {
      let craftProgress: number = 0;
      let currentProgress: number = 0;
      const length: number = items.length;
  
      for (let i = 0; i < length; i++) {
        console.log(`Processing item ${i + 1}/${length}`, items[i]);
  
        for (const key in items[i]) {
          if (items[i].hasOwnProperty(key)) {
            items[i][key] += 1;
          }
        }
  
        currentProgress++;
        craftProgress = currentProgress / length;
      }
  
      console.log(items)

<<<<<<< HEAD
      return items;
=======
        if(Items[1].plants && Object.keys(Items[1].plants).length > 0){ 
            AllItems.plants = Items[1].plants
        }

        if(AllItems.length > 0){ 
            
        }

        return Items
       }catch(e:any){ 
        return e
       }
>>>>>>> f42d3b0cdd211754c9748e0dfdb6044634462b5a

    }
  }
  
  export default MargeService;