import express, { Application } from "express";

const altPORT: number = 1909

const PORT = process.env.PORT || altPORT;

const app:Application = express() 

const startAPP = ()=>{ 
    try{ 
        app.listen(PORT,()=> console.log(`server listening on PORT ${PORT}`))
    }catch(e: any){ 
        console.log(`server error: ${e.message}`)
    }
}
startAPP()