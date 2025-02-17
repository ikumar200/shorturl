import prisma from "./db";

const createUser=async (data:{name:string,email:string,password:string})=>{
    return await prisma.user.create({
        data:{
            name:data.name,
            email:data.email,
            password:data.password
        }
    });
};

const getUser=async (id:number)=>{
    return await prisma.user.findUnique({
        where:{id},
    })
}

const updateUser=async (data:{id:number,name:string,email:string,password:string})=>{
    return await prisma.user.update({
        where:{id: data.id},
        data:{
            name:data.name,
            email:data.email,
            password:data.password
        }
    })
}

const deleteUser=async (id:number)=>{
    return await prisma.user.delete({
        where:{id}
    })
}


export {createUser,getUser,updateUser,deleteUser};