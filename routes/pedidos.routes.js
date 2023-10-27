import { Router } from "express"
import fs from 'fs'
import path from "path"


const pedidosFile = path.join(process.cwd(), "data", "pedidos.json") 

const router = Router()

router.get("/", (req, res)=>{
    const pedido = readfile()
    res.json(pedido)
})

function readfile(){
    const result = fs.readFileSync(pedidosFile, "utf-8")
    const json = JSON.parse(result)
    return json
}

export default router