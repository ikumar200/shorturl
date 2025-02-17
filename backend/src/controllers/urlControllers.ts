import { Request,Response } from "express";
import { getUrl,getUrls,createUrl,updateUrl,deleteUrl,visitCount } from "../models/urlModel";

const geturl=async(req:Request,res:Response)=>{
    const {shortCode}=req.body;
    try{
        const url=await getUrl(shortCode)
        if(!url){
            res.sendStatus(404).json({msg:"url not found"});
            return 
        }
        res.json(url);
    }catch(err){
        res.status(500).json({msg:err});
    }
}

const geturls=async(req:Request,res:Response)=>{
    const {userId}=req.params;
    const id=parseInt(userId)
    try{
        const url=await getUrls(id)
        if(!url){
            res.sendStatus(404).json({msg:"urls not found"});
            return 
        }
        res.json(url);
    }catch(err){
        res.status(500).json({msg:err});
    }
}

const createurl=async(req:Request,res:Response)=>{
    const {email,userId,longUrl,customShortName,expiresAt}=req.body;
    const id=parseInt(userId);
    const expire = new Date(expiresAt);
    try{
        const url=await createUrl(email,id,longUrl,customShortName,expire)
        if(!url){
            res.sendStatus(404).json({msg:"cant create url"});
            return 
        }
        res.json(url);
    }catch(err){
        res.status(500).json({msg:err});
    }
}

const updateurl=async(req:Request,res:Response)=>{
    const {longUrl,customShortName,expiresAt}=req.params;
    const expire = new Date(expiresAt);
    try{
        const url=await updateUrl(longUrl,customShortName,expire)
        if(!url){
            res.sendStatus(404).json({msg:"cant update url"});
            return 
        }
        res.json(url);
    }catch(err){
        res.status(500).json({msg:err});
    }
}

const deleteurl=async(req:Request,res:Response)=>{
    const {shortURL}=req.params;
    try{
        const url=await deleteUrl(shortURL)
        if(!url){
            res.sendStatus(404).json({msg:"cant delete url"});
            return 
        }
        res.json(url);
    }catch(err){
        res.status(500).json({msg:err});
    }
}

const visitcount=async(req:Request,res:Response)=>{
    const {shortURL}=req.params;
    try{
        const url=await visitCount(shortURL)
        if(!url){
            res.sendStatus(404).json({msg:"cant find the count"});
            return 
        }
        res.json(url);
    }catch(err){
        res.status(500).json({msg:err});
    }
}

export {createurl,geturl,geturls,updateurl,deleteurl,visitcount}