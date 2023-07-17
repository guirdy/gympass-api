import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Guilherme Leandro',
    email: 'guilherme@leandro.com.br',
  },
})

// ORM - Object Relational Mapper
