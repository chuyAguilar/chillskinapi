import express from "express";
import temRoutes from './src/routes/prot.routes';

const app = express();

app.get('/',(req,res)=>{
    res.send("ChillSkin api")
});

app.use('/api/temp', temRoutes);


export default app;