import { PrismaClient } from '@prisma/client'
import { seedData } from './data'

let prisma

async function deleteAllData() {
  console.log('Deleting all data...')
  await prisma.$executeRaw`
    TRUNCATE TABLE 
      "Verification",
      "ValetAssignment",
      "BookingTimeline",
      "Review",
      "Booking",
      "Slot",
      "Address",
      "Garage",
      "Valet",
      "Manager",
      "Company",
      "Admin",
      "Customer",
      "AuthProvider",
      "Credentials",
      "User"
    RESTART IDENTITY CASCADE;
  `
  console.log('All data deleted.')
}

async function addData() {
  const {
    adminUserData,
    managerUserData,
    customerData,
    garageData,
    valetData,
  } = seedData

  const tempData = {
    company: [],
    manager: [],
    admin: [],
    customer: [],
    valet: [],
  }

  console.log('Creating manager')
  for (const manager of managerUserData) {
    // Create company
    const newCompany = await prisma.company.create({
      data: {
        displayName: manager.company.displayName,
        description: manager.company.description,
      },
    })
    tempData.company.push(newCompany)

    // For creating manager, we need to create user first
    const newUser = await prisma.user.create({
      data: {
        uid: manager.uid,
        name: manager.name,
        image: manager.image,
        Credentials: {
          create: {
            email: manager.email,
            passwordHash: manager.password,
          },
        },
        AuthProvider: {
          create: {
            type: 'CREDENTIALS',
          },
        },
      },
    })

    const newManager = await prisma.manager.create({
      data: {
        uid: newUser.uid,
        displayName: manager.displayName,
        companyId: newCompany.id,
      },
    })
    tempData.manager.push(newManager)
  }

  console.log('Creating admin')
  for (const admin of adminUserData) {
    const newUser = await prisma.user.create({
      data: {
        uid: admin.uid,
        name: admin.name,
        image: admin.image,
        Credentials: {
          create: {
            email: admin.email,
            passwordHash: admin.password,
          },
        },
        AuthProvider: {
          create: {
            type: 'CREDENTIALS',
          },
        },
      },
      include: {
        Credentials: true,
      },
    })

    const newAdmin = await prisma.admin.create({
      data: {
        uid: newUser.uid,
      },
    })
    tempData.admin.push(newAdmin)
  }

  console.log('Creating customer')
  for (const customer of customerData) {
    const newUser = await prisma.user.create({
      data: {
        uid: customer.uid,
        name: customer.name,
        image: customer.image,
        Credentials: {
          create: {
            email: customer.email,
            passwordHash: customer.password,
          },
        },
        AuthProvider: {
          create: {
            type: 'CREDENTIALS',
          },
        },
      },
      include: {
        Credentials: true,
      },
    })

    const newCustomer = await prisma.customer.create({
      data: {
        uid: newUser.uid,
        displayName: customer.displayName,
      },
    })
    tempData.customer.push(newCustomer)
  }

  console.log('Creating garage')
  for (const garage of garageData) {
    // Get any random company from the tempData
    const randomCompany =
      tempData.company[Math.floor(Math.random() * tempData.company.length)]

    const newGarage = await prisma.garage.create({
      data: {
        ...garage,
        companyId: randomCompany.id,
      },
    })
  }

  console.log('Creating Valet.')
  for (const valet of valetData) {
    // Get any random company from the tempData
    const randomCompany =
      tempData.company[Math.floor(Math.random() * tempData.company.length)]

    const newUser = await prisma.user.create({
      data: {
        uid: valet.uid,
        name: valet.name,
        image: valet.image,
        Credentials: {
          create: {
            email: valet.email,
            passwordHash: valet.password,
          },
        },
        AuthProvider: {
          create: {
            type: 'CREDENTIALS',
          },
        },
      },
      include: {
        Credentials: true,
      },
    })

    const newValet = await prisma.valet.create({
      data: {
        uid: newUser.uid,
        displayName: valet.displayName,
        image: valet.image,
        licenceID: valet.licenceID,
        companyId: randomCompany.id,
      },
    })
    tempData.valet.push(newValet)
  }
}

async function main() {
  prisma = new PrismaClient()

  console.log('Seeding data...')

  // Delete all data
  await deleteAllData()

  await addData()
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
