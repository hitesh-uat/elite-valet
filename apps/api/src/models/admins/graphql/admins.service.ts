import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateAdminInput } from './dtos/create-admin.input'
import { FindManyAdminArgs, FindUniqueAdminArgs } from './dtos/find.args'
import { UpdateAdminInput } from './dtos/update-admin.input'

@Injectable()
export class AdminsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createAdminInput: CreateAdminInput) {
    // CHeck if user exists in users table
    const user = await this.prisma.user.findUnique({
      where: { uid: createAdminInput.uid },
    })
    if (!user) {
      throw new Error('User does not exist')
    }

    // Check if admin already exists
    const admin = await this.prisma.admin.findUnique({
      where: { uid: createAdminInput.uid },
    })
    if (admin) {
      throw new Error('Admin already exists')
    }
    return this.prisma.admin.create({
      data: createAdminInput,
    })
  }

  findAll(args: FindManyAdminArgs) {
    return this.prisma.admin.findMany(args)
  }

  findOne(args: FindUniqueAdminArgs) {
    return this.prisma.admin.findUnique(args)
  }

  update(updateAdminInput: UpdateAdminInput) {
    const { uid, ...data } = updateAdminInput
    return this.prisma.admin.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueAdminArgs) {
    return this.prisma.admin.delete(args)
  }
}
