
import MargeType from "../type";

class MargeService{ 

   static async mathMarge(margeItems:any){ 

       try{ 
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
  
  export default MargeService;
