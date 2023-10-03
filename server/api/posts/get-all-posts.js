import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    return prisma.posts.findMany({
        orderBy: {id: "desc"},
        include: {likes: true}
    });
})
