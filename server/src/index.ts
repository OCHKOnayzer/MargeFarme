import express, { Application,Router } from "express";
import margeRouter from "./routes/margeRoute";

const altPORT: number = 1909

const PORT = process.env.PORT || altPORT;

const app:Application = express();

<<<<<<< HEAD
app.use(express.json())

const apiRote = Router()

app.use('/api',apiRote);
apiRote.use('/margeRouter',margeRouter);
=======
const apiRote = Router()

app.use('/api',apiRote);
apiRote.use('/marge',margeRouter);
>>>>>>> f42d3b0cdd211754c9748e0dfdb6044634462b5a

const startAPP = ()=>{ 
    try{ 
        app.listen(PORT,()=> console.log(`server listening on PORT ${PORT}`))
    }catch(e: any){ 
        console.log(`server error: ${e.message}`)
    }
}
startAPP()