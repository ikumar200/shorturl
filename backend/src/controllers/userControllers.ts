import { number } from "zod";
import { createUser,getUser,updateUser,deleteUser } from "../models/userModel";
import { Request,Response } from "express";

const getuser=async(req:Request,res:Response)=>{
        const {id}=req.params;
        try{
            const user=await getUser(Number(id));
            if(!user){
                res.sendStatus(404).json({msg:"user not found"});
                return 
            }
            res.json(user);
        }catch(err){
            console.log("ddadadasd")
            res.status(500).json({msg:err});
        }
};

const createuser=async(req:Request,res:Response)=>{
    const {name,email,password}=req.body;
    const data={name,email,password}
    try{
        const user=await createUser(data);
        if(!user){
            res.sendStatus(404).json({mag:"user didnt created"});
            return 
        }
        res.json(user);
    }catch(err){
        res.status(500).json({msg:err});
    }
}

const updateuser=async(req:Request,res:Response)=>{
    const {name,email,password}=req.body;
    const {id}=req.params;
    const data={id:parseInt(id),name,email,password}
    try{
        const user=await updateUser(data);
        if(!user){
            res.sendStatus(404).json({msg:"user not found"});
            return 
        }
        res.json(user);
    }catch(err){
        res.status(500).json({msg:err});
    }
};

const deleteuser=async(req:Request,res:Response)=>{
    const {id}=req.params;
    try{
        const user=await deleteUser(Number(id));
        if(!user){
            res.sendStatus(404).json({msg:"user not found"});
            return 
        }
        res.json(user);
    }catch(err){
        console.log("aasasasa")
        res.status(500).json({msg:err});
    }
};


export {updateuser,getuser,deleteuser,createuser}