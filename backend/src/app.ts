import express from "express";
import userRoutes from "./routes/userRoutes";
import urlRoutes from "./routes/urlRoutes";

const app=express();
app.use(express.json());

app.use("/api/users",userRoutes);
app.use("/api/url",urlRoutes);



export default app;