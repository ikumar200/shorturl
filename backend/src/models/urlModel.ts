import prisma from "./db";

const createUrl=async(userEmail: string,userId: number, longUrl: string, customShortName: string, expiresAt?: Date)=>{
    // Fetch the user based on email
    const user = await prisma.user.findUnique({
        where: { email: userEmail }
    });

    if (!user) {
        throw new Error("User not found");
    }

    // Append custom short name to the email (replace '@' to prevent conflicts)
    const shortCode = `${userEmail.replace("@", "_")}_${customShortName}`;

    // Check if shortCode already exists
    const existingUrl = await prisma.shortURL.findUnique({
        where: { shortCode }
    });

    if (existingUrl) {
        throw new Error("Short URL already exists, choose a different short name");
    }

    // Create the shortened URL entry in the database
    return await prisma.shortURL.create({
        data: {
            shortCode,   // Unique shortCode (e.g., "asd_gmail.com/xyzform")
            longUrl,     // Original URLhttp://localhost:3000/api/url/anuja_gmail.com/mydobs
            userId: user.id,  // Link to user
            expiresAt    // Optional expiration date
        }
    });
}


const getUrl=async(shortCode:string)=>{
    return await prisma.shortURL.findUnique({
        where:{shortCode}
    });
};

const getUrls=async(userId:number)=>{
    return await prisma.shortURL.findMany({
        where:{userId}
    })
}

const updateUrl = async (shortCode: string, newLongUrl: string, newExpiresAt?: Date) => {
    return await prisma.shortURL.update({
        where: { shortCode },
        data: {
            longUrl: newLongUrl,
            expiresAt: newExpiresAt
        }
    });
};

const deleteUrl = async (shortCode: string) => {
    return await prisma.shortURL.delete({
        where: { shortCode }
    });
};

const visitCount = async (shortCode: string) => {
    return await prisma.shortURL.update({
        where: { shortCode },
        data: {
            visitCount: {
                increment: 1  // Increments the count by 1
            }
        }
    });
};


export {createUrl,getUrl,getUrls,deleteUrl,updateUrl,visitCount}