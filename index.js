import express  from 'express'
import {config} from 'dotenv'
config()
import pedidosRoutes from './routes/pedidos.routes.js'
const PORT = process.env.PORT || 3000;
const app = express()
app.use(express.json())

app.use("/api/pedidos", pedidosRoutes)

app.listen(3000, ()=>{
    console.log(" =) Server is runig http:/localhost" + PORT)
})