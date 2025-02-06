/**

// https://unsplash.com/s/photos/indian-business-man
// https://unsplash.com/s/photos/indian-professional-woman
// Manager

1. We will create 10 Admins, 10 Managers, 20 Valets, 10 Customers and 20 valet
 *
 *
 */

import { generateGarageSlots } from './util'

// Admin
const adminUserData = [
  {
    name: 'Aarav Patel',
    email: 'admin1@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u1.jpg',
  },
  {
    name: 'Priya Sharma',
    email: 'admin2@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u2.jpg',
  },
  {
    name: 'Rohan Singh',
    email: 'admin3@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u3.jpg',
  },
  {
    name: 'Ananya Gupta',
    email: 'admin4@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u4.jpg',
  },
  {
    name: 'Vikram Joshi',
    email: 'admin5@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u5.jpg',
  },
  {
    name: 'Sneha Reddy',
    email: 'admin6@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u6.jpg',
  },
  {
    name: 'Arjun Kumar',
    email: 'admin7@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u7.jpg',
  },
  {
    name: 'Meera Desai',
    email: 'admin8@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u8.jpg',
  },
  {
    name: 'Aditya Mishra',
    email: 'admin9@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u9.jpg',
  },
  {
    name: 'Divya Iyer',
    email: 'admin10@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u10.jpg',
  },
]

const managerUserData = [
  {
    name: 'Rajesh Khanna',
    email: 'manager1@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u11.jpg',
    displayName: 'Rajesh Khanna',
    company: {
      displayName: 'SecurePark Solutions',
      description:
        'Premium 24/7 guarded parking facilities with AI surveillance and valet services, specializing in corporate building partnerships and luxury vehicle handling.',
    },
  },
  {
    name: 'Neha Verma',
    email: 'manager2@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u12.jpg',
    displayName: 'Neha Verma',
    company: {
      displayName: 'UrbanValet Network',
      description:
        'City-center automated parking systems with mobile app integration, offering reserved spots, EV charging stations, and car detailing add-ons.',
    },
  },
  {
    name: 'Vivek Malhotra',
    email: 'manager3@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u13.jpg',
    displayName: 'Vivek Malhotra',
    company: {
      displayName: 'AutoHaven Garages',
      description:
        'Climate-controlled vehicle storage facilities with premium security features, specializing in classic car preservation and long-term airport parking.',
    },
  },
  {
    name: 'Pooja Mehta',
    email: 'manager4@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u14.jpg',
    displayName: 'Pooja Mehta',
    company: {
      displayName: 'SwiftGarage Systems',
      description:
        'Smart parking infrastructure providers offering automated stack parking solutions and valet robotics for high-density urban areas.',
    },
  },
  {
    name: 'Karan Johar',
    email: 'manager5@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u15.jpg',
    displayName: 'Karan Johar',
    company: {
      displayName: 'EcoMobility Hubs',
      description:
        'Sustainable parking centers with solar-powered facilities, EV charging ecosystems, and integrated micro mobility options (e-scooters/bikes).',
    },
  },
  {
    name: 'Anjali Rao',
    email: 'manager6@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u16.jpg',
    displayName: 'Anjali Rao',
    company: {
      displayName: 'ParkSphere Dynamics',
      description:
        'Event-focused parking management specialists offering temporary smart lots with license plate recognition and dynamic pricing for stadiums/convention centers.',
    },
  },
  {
    name: 'Rahul Bajaj',
    email: 'manager7@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u17.jpg',
    displayName: 'Rahul Bajaj',
    company: {
      displayName: 'NestPark Residential',
      description:
        'Apartment complex parking optimization systems featuring automated guest passes, resident vehicle monitoring, and package delivery lockers integration.',
    },
  },
  {
    name: 'Shreya Chopra',
    email: 'manager8@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u18.jpg',
    displayName: 'Shreya Chopra',
    company: {
      displayName: 'LuxeShield Parking',
      description:
        'White-glove parking concierge service offering insured vehicle storage, biometric access, and maintenance logging for premium automotive collections.',
    },
  },
  {
    name: 'Amit Trivedi',
    email: 'manager9@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u19.jpg',
    displayName: 'Amit Trivedi',
    company: {
      displayName: 'CargoGuard Depots',
      description:
        'Secure truck and RV parking complexes with weigh station integration, cargo monitoring systems, and driver amenities for long-haul logistics.',
    },
  },
  {
    name: 'Nandini Das',
    email: 'manager10@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u20.jpg',
    displayName: 'Nandini Das',
    company: {
      displayName: 'SpotChain Technologies',
      description:
        'Blockchain-based parking platform enabling peer-to-peer space sharing, real-time availability tracking, and crypto payment options for urban drivers.',
    },
  },
]

const customerData = [
  {
    uid: crypto.randomUUID(),
    name: 'Arjun Mehta',
    email: 'customer1@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u21.jpg',
  },
  {
    uid: crypto.randomUUID(),
    name: 'Kavya Reddy',
    email: 'customer2@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u22.jpg',
  },
  {
    uid: crypto.randomUUID(),
    name: 'Vikram Singh',
    email: 'customer3@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u23.jpg',
  },
  {
    uid: crypto.randomUUID(),
    name: 'Priyanka Sharma',
    email: 'customer4@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u24.jpg',
  },
  {
    uid: crypto.randomUUID(),
    name: 'Rohan Desai',
    email: 'customer5@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u25.jpg',
  },
  {
    uid: crypto.randomUUID(),
    name: 'Anjali Gupta',
    email: 'customer6@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u26.jpg',
  },
  {
    uid: crypto.randomUUID(),
    name: 'Suresh Iyer',
    email: 'customer7@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u27.jpg',
  },
  {
    uid: crypto.randomUUID(),
    name: 'Neha Kapoor',
    email: 'customer8@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u28.jpg',
  },
  {
    uid: crypto.randomUUID(),
    name: 'Rajiv Joshi',
    email: 'customer9@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u29.jpg',
  },
  {
    uid: crypto.randomUUID(),
    name: 'Divya Chawla',
    email: 'customer10@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u30.jpg',
  },
]

const valetData = [
  {
    name: 'Arjun Mehta',
    email: 'valet1@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u31.jpg',
    displayName: 'Arjun Mehta',
    licenceID: 'DL-100001',
  },
  {
    name: 'Priya Reddy',
    email: 'valet2@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u32.jpg',
    displayName: 'Priya Reddy',
    licenceID: 'DL-100002',
  },
  {
    name: 'Rohan Sharma',
    email: 'valet3@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u33.jpg',
    displayName: 'Rohan Sharma',
    licenceID: 'DL-100003',
  },
  {
    name: 'Neha Patel',
    email: 'valet4@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u34.jpg',
    displayName: 'Neha Patel',
    licenceID: 'DL-100004',
  },
  {
    name: 'Vikram Singh',
    email: 'valet5@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u35.jpg',
    displayName: 'Vikram Singh',
    licenceID: 'DL-100005',
  },
  {
    name: 'Ananya Gupta',
    email: 'valet6@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u36.jpg',
    displayName: 'Ananya Gupta',
    licenceID: 'DL-100006',
  },
  {
    name: 'Karan Joshi',
    email: 'valet7@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u37.jpg',
    displayName: 'Karan Joshi',
    licenceID: 'DL-100007',
  },
  {
    name: 'Sneha Iyer',
    email: 'valet8@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u38.jpg',
    displayName: 'Sneha Iyer',
    licenceID: 'DL-100008',
  },
  {
    name: 'Rahul Desai',
    email: 'valet9@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u39.jpg',
    displayName: 'Rahul Desai',
    licenceID: 'DL-100009',
  },
  {
    name: 'Divya Kumar',
    email: 'valet10@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u40.jpg',
    displayName: 'Divya Kumar',
    licenceID: 'DL-100010',
  },
  {
    name: 'Aditya Rao',
    email: 'valet11@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u1.jpg',
    displayName: 'Aditya Rao',
    licenceID: 'DL-100011',
  },
  {
    name: 'Pooja Mishra',
    email: 'valet12@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u2.jpg',
    displayName: 'Pooja Mishra',
    licenceID: 'DL-100012',
  },
  {
    name: 'Rajiv Choudhary',
    email: 'valet13@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u3.jpg',
    displayName: 'Rajiv Choudhary',
    licenceID: 'DL-100013',
  },
  {
    name: 'Meera Srinivasan',
    email: 'valet14@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u4.jpg',
    displayName: 'Meera Srinivasan',
    licenceID: 'DL-100014',
  },
  {
    name: 'Amit Trivedi',
    email: 'valet15@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u5.jpg',
    displayName: 'Amit Trivedi',
    licenceID: 'DL-100015',
  },
  {
    name: 'Shreya Menon',
    email: 'valet16@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u6.jpg',
    displayName: 'Shreya Menon',
    licenceID: 'DL-100016',
  },
  {
    name: 'Vivek Nair',
    email: 'valet17@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u7.jpg',
    displayName: 'Vivek Nair',
    licenceID: 'DL-100017',
  },
  {
    name: 'Anika Kapoor',
    email: 'valet18@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u4.jpg',
    displayName: 'Anika Kapoor',
    licenceID: 'DL-100018',
  },
  {
    name: 'Rishi Bajaj',
    email: 'valet19@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u9.jpg',
    displayName: 'Rishi Bajaj',
    licenceID: 'DL-100019',
  },
  {
    name: 'Nandini Chopra',
    email: 'valet20@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u10.jpg',
    displayName: 'Nandini Chopra',
    licenceID: 'DL-100020',
  },
  {
    name: 'Sanjay Verma',
    email: 'valet21@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u1.jpg',
    displayName: 'Sanjay Verma',
    licenceID: 'DL-100021',
  },
  {
    name: 'Kavita Deshpande',
    email: 'valet22@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u2.jpg',
    displayName: 'Kavita Deshpande',
    licenceID: 'DL-100022',
  },
  {
    name: 'Alok Khanna',
    email: 'valet23@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u3.jpg',
    displayName: 'Alok Khanna',
    licenceID: 'DL-100023',
  },
  {
    name: 'Sunita Rao',
    email: 'valet24@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u4.jpg',
    displayName: 'Sunita Rao',
    licenceID: 'DL-100024',
  },
  {
    name: 'Rajeshwari Iyer',
    email: 'valet25@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u5.jpg',
    displayName: 'Rajeshwari Iyer',
    licenceID: 'DL-100025',
  },
  {
    name: 'Manoj Bhatia',
    email: 'valet26@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u6.jpg',
    displayName: 'Manoj Bhatia',
    licenceID: 'DL-100026',
  },
  {
    name: 'Preeti Chawla',
    email: 'valet27@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u7.jpg',
    displayName: 'Preeti Chawla',
    licenceID: 'DL-100027',
  },
  {
    name: 'Deepak Malhotra',
    email: 'valet28@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u8.jpg',
    displayName: 'Deepak Malhotra',
    licenceID: 'DL-100028',
  },
  {
    name: 'Swati Sengupta',
    email: 'valet29@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u9.jpg',
    displayName: 'Swati Sengupta',
    licenceID: 'DL-100029',
  },
  {
    name: 'Harish Shetty',
    email: 'valet30@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u10.jpg',
    displayName: 'Harish Shetty',
    licenceID: 'DL-100030',
  },
  {
    name: 'Anjali Ranganathan',
    email: 'valet31@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u11.jpg',
    displayName: 'Anjali Ranganathan',
    licenceID: 'DL-100031',
  },
  {
    name: 'Suresh Nair',
    email: 'valet32@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u12.jpg',
    displayName: 'Suresh Nair',
    licenceID: 'DL-100032',
  },
  {
    name: 'Padmini Reddy',
    email: 'valet33@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u13.jpg',
    displayName: 'Padmini Reddy',
    licenceID: 'DL-100033',
  },
  {
    name: 'Nikhil Mehra',
    email: 'valet34@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u14.jpg',
    displayName: 'Nikhil Mehra',
    licenceID: 'DL-100034',
  },
  {
    name: 'Lata Krishnan',
    email: 'valet35@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u15.jpg',
    displayName: 'Lata Krishnan',
    licenceID: 'DL-100035',
  },
  {
    name: 'Ravi Shankar',
    email: 'valet36@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u16.jpg',
    displayName: 'Ravi Shankar',
    licenceID: 'DL-100036',
  },
  {
    name: 'Geeta Pillai',
    email: 'valet37@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u17.jpg',
    displayName: 'Geeta Pillai',
    licenceID: 'DL-100037',
  },
  {
    name: 'Sameer Joshi',
    email: 'valet38@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u18.jpg',
    displayName: 'Sameer Joshi',
    licenceID: 'DL-100038',
  },
  {
    name: 'Asha Gupta',
    email: 'valet39@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u19.jpg',
    displayName: 'Asha Gupta',
    licenceID: 'DL-100039',
  },
  {
    name: 'Karthik Venkatesh',
    email: 'valet40@gmail.com',
    password: '$2a$10$Kwk8cMSslQmvUgXjsvEHtumYmNQPuMXXuJjpwX4.2hnwyQOHoEWYS',
    image: 'https://my-bucker-name.s3.us-east-1.amazonaws.com/user/u20.jpg',
    displayName: 'Karthik Venkatesh',
    licenceID: 'DL-100040',
  },
]

let garageData = [
  {
    displayName: 'TechPark Secure Garage',
    description:
      "Multi-level automated parking facility in Bengaluru's IT hub with 24/7 surveillance and EV charging stations",
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g1.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g2.jpg',
    ],
    Address: {
      create: {
        lat: 12.9716,
        lng: 77.5946,
        address: 'Electronic City, Bengaluru, Karnataka',
      },
    },
  },
  {
    displayName: 'Marine Drive Valet Hub',
    description:
      "Coastal parking complex with premium valet services and car care facilities near Mumbai's business district",
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g3.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g4.jpg',
    ],
    Address: {
      create: {
        lat: 18.94,
        lng: 72.835,
        address: 'Nariman Point, Mumbai, Maharashtra',
      },
    },
  },
  {
    displayName: 'Capital Shield Parking',
    description:
      "Government-approved secure parking complex with biometric access in New Delhi's diplomatic area",
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g5.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g6.jpg',
    ],
    Address: {
      create: {
        lat: 28.6139,
        lng: 77.209,
        address: 'Chanakyapuri, New Delhi',
      },
    },
  },
  {
    displayName: 'Chennai Marina StackPark',
    description:
      "High-density automated parking system serving Chennai's beach-front commercial district",
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g7.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g8.jpg',
    ],
    Address: {
      create: {
        lat: 13.0827,
        lng: 80.2707,
        address: 'Besant Nagar, Chennai, Tamil Nadu',
      },
    },
  },
  {
    displayName: 'Pink City Garage',
    description:
      'Heritage-sensitive parking facility in Jaipur with climate-controlled storage for classic cars',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g9.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g10.jpg',
    ],
    Address: {
      create: {
        lat: 26.9124,
        lng: 75.7873,
        address: 'C-Scheme, Jaipur, Rajasthan',
      },
    },
  },
  {
    displayName: 'Kolkata Riverside Parking',
    description:
      'Flood-protected parking complex with 24/7 valet service near Howrah Bridge',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g11.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g12.jpg',
    ],
    Address: {
      create: {
        lat: 22.5726,
        lng: 88.3639,
        address: 'BBD Bagh, Kolkata, West Bengal',
      },
    },
  },
  {
    displayName: 'Hyderabad Tech Valley Garage',
    description:
      'Smart parking facility with AI-powered space allocation near HITEC City',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g13.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g14.jpg',
    ],
    Address: {
      create: {
        lat: 17.4454,
        lng: 78.3491,
        address: 'Madhapur, Hyderabad, Telangana',
      },
    },
  },
  {
    displayName: 'Ahmedabad Heritage Parking',
    description:
      'Solar-powered parking complex integrated with Sabarmati Riverfront development',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g15.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g16.jpg',
    ],
    Address: {
      create: {
        lat: 23.0225,
        lng: 72.5714,
        address: 'Sabarmati Riverfront, Ahmedabad, Gujarat',
      },
    },
  },
  {
    displayName: 'Pune IT Park Garage',
    description:
      'Automated stack parking system serving Hinjewadi IT Park with mobile app integration',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g17.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g18.jpg',
    ],
    Address: {
      create: {
        lat: 18.5924,
        lng: 73.7397,
        address: 'Hinjewadi Phase 1, Pune, Maharashtra',
      },
    },
  },
  {
    displayName: 'Chandigarh Sector 17 Plaza Parking',
    description:
      'Le Corbusier-designed parking facility in City Beautiful with EV charging ecosystem',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g19.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g20.jpg',
    ],
    Address: {
      create: {
        lat: 30.7333,
        lng: 76.7794,
        address: 'Sector 17, Chandigarh',
      },
    },
  },
  {
    displayName: 'Kochi Waterfront Parking',
    description:
      'Marine-friendly parking complex with boat trailer facilities and corrosion-resistant infrastructure near Port Trust',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g21.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g22.jpg',
    ],
    Address: {
      create: {
        lat: 9.9312,
        lng: 76.2673,
        address: 'Fort Kochi, Ernakulam, Kerala',
      },
    },
  },
  {
    displayName: 'Lucknow Heritage Garage',
    description:
      'Underground parking facility near Bara Imambara with humidity-controlled preservation for vintage vehicles',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g23.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g24.jpg',
    ],
    Address: {
      create: {
        lat: 26.8467,
        lng: 80.9462,
        address: 'Hussainabad, Lucknow, Uttar Pradesh',
      },
    },
  },
  {
    displayName: 'Guwahati Rivergate Parking',
    description:
      'Elevated flood-resistant parking complex with 24/7 security near Brahmaputra riverfront',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g25.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g26.jpg',
    ],
    Address: {
      create: {
        lat: 26.1445,
        lng: 91.7362,
        address: 'Pan Bazar, Guwahati, Assam',
      },
    },
  },
  {
    displayName: 'Bhopal Lakeview Garage',
    description:
      'Solar-powered parking facility with electric shuttle service to VIP Road commercial district',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g27.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g28.jpg',
    ],
    Address: {
      create: {
        lat: 23.2599,
        lng: 77.4126,
        address: 'Shamla Hills, Bhopal, Madhya Pradesh',
      },
    },
  },
  {
    displayName: 'Dehradun TerraSecure Parking',
    description:
      'Mountain terrain-optimized garage with 4x4 vehicle storage and rooftop helipad access',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g29.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g30.jpg',
    ],
    Address: {
      create: {
        lat: 30.3165,
        lng: 78.0322,
        address: 'Rajpur Road, Dehradun, Uttarakhand',
      },
    },
  },
  {
    displayName: 'Patna Historic Garage',
    description:
      'Earthquake-resistant parking structure near Gandhi Maidan with vintage car maintenance workshop',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g31.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g32.jpg',
    ],
    Address: {
      create: {
        lat: 25.6127,
        lng: 85.1589,
        address: 'Buddha Marg, Patna, Bihar',
      },
    },
  },
  {
    displayName: 'Vizag Port Parking',
    description:
      'Coastal security-certified parking facility with customs clearance integration for imported vehicles',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g33.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g34.jpg',
    ],
    Address: {
      create: {
        lat: 17.6868,
        lng: 83.2185,
        address: 'Waltair Uplands, Visakhapatnam, Andhra Pradesh',
      },
    },
  },
  {
    displayName: 'Agra Taj Garage',
    description:
      "Pollution-controlled parking complex with electric buggy service to Taj Mahal's East Gate",
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g35.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g36.jpg',
    ],
    Address: {
      create: {
        lat: 27.1751,
        lng: 78.0421,
        address: 'Tajganj, Agra, Uttar Pradesh',
      },
    },
  },
  {
    displayName: 'Surat Diamond Parking',
    description:
      'High-security parking complex with armored vehicle facilities near Diamond Bourse',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g37.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g38.jpg',
    ],
    Address: {
      create: {
        lat: 21.1702,
        lng: 72.8311,
        address: 'Katargam, Surat, Gujarat',
      },
    },
  },
  {
    displayName: 'Connaught Circle AutoPark',
    description:
      "Iconic circular multi-level parking in Delhi's commercial heart with 24/7 security and valet service",
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g39.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g40.jpg',
    ],
    Address: {
      create: {
        lat: 28.6328,
        lng: 77.2197,
        address: 'Connaught Place, New Delhi',
      },
    },
  },
  {
    displayName: 'Dilli Haat Secure Parking',
    description:
      'Underground parking facility with cultural theme lighting and electric vehicle charging points',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g41.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g42.jpg',
    ],
    Address: {
      create: {
        lat: 28.5685,
        lng: 77.1913,
        address: 'INA Colony, New Delhi',
      },
    },
  },
  {
    displayName: 'Aerocity Premium Garage',
    description:
      'Climate-controlled parking with car spa services and biometric access near Indira Gandhi Airport',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g43.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g44.jpg',
    ],
    Address: {
      create: {
        lat: 28.5553,
        lng: 77.1147,
        address: 'Aerocity, New Delhi',
      },
    },
  },
  {
    displayName: 'Chandni Chowk SmartPark',
    description:
      'Compact automated stack parking system with 24/7 surveillance in Old Delhi',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g45.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g46.jpg',
    ],
    Address: {
      create: {
        lat: 28.6562,
        lng: 77.2307,
        address: 'Chandni Chowk, Delhi',
      },
    },
  },
  {
    displayName: 'DLF CyberHub Parking',
    description:
      'Multi-level automated parking with direct mall access and EV charging stations',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g47.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g48.jpg',
    ],
    Address: {
      create: {
        lat: 28.4965,
        lng: 77.0944,
        address: 'DLF Cyber City, Gurugram',
      },
    },
  },
  {
    displayName: 'India Gate Heritage Parking',
    description:
      'Solar-powered underground parking with bicycle rental station and 24/7 security',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g49.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g50.jpg',
    ],
    Address: {
      create: {
        lat: 28.6129,
        lng: 77.2295,
        address: 'India Gate, New Delhi',
      },
    },
  },
  {
    displayName: 'Connaught Place AutoPark',
    description:
      "Art deco-style automated parking in Delhi's commercial heart with heritage-sensitive design",
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g51.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g52.jpg',
    ],
    Address: {
      create: {
        lat: 28.6315,
        lng: 77.2167,
        address: 'Block E, Connaught Place, New Delhi',
      },
    },
  },
  {
    displayName: 'Cyber City StackPark',
    description:
      '15-story robotic parking system serving Gurugram corporate towers with AI space optimization',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g53.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g54.jpg',
    ],
    Address: {
      create: {
        lat: 28.4996,
        lng: 77.0943,
        address: 'DLF Cyber City, Gurugram, Delhi NCR',
      },
    },
  },
  {
    displayName: 'Chandni Chowk SecurePark',
    description:
      "Underground valet facility with 24/7 security in Old Delhi's historic marketplace",
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g55.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g56.jpg',
    ],
    Address: {
      create: {
        lat: 28.6593,
        lng: 77.2303,
        address: 'Chandni Chowk, Old Delhi',
      },
    },
  },
  {
    displayName: 'Aerocity Premium Garage',
    description:
      'Luxury vehicle storage with climate control and private showrooms near IGI Airport',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g57.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g58.jpg',
    ],
    Address: {
      create: {
        lat: 28.5552,
        lng: 77.1142,
        address: 'Aerocity, Indira Gandhi Airport, Delhi',
      },
    },
  },
  {
    displayName: 'Lotus Temple EcoPark',
    description:
      "Solar-powered underground facility with electric shuttle service to Bahá'í House of Worship",
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g59.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g60.jpg',
    ],
    Address: {
      create: {
        lat: 28.5535,
        lng: 77.2588,
        address: 'Kalkaji, South Delhi',
      },
    },
  },
  {
    displayName: 'Dilli Haat Valet Hub',
    description:
      'Cultural district parking with artisan valet service and electric rickshaw charging points',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g61.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g62.jpg',
    ],
    Address: {
      create: {
        lat: 28.5685,
        lng: 77.2236,
        address: 'INA Colony, South Delhi',
      },
    },
  },
  {
    displayName: 'Qutub Minar Heritage Garage',
    description:
      'Archaeological zone-compliant parking with dust-free preservation for classic cars',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g63.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g64.jpg',
    ],
    Address: {
      create: {
        lat: 28.5244,
        lng: 77.1855,
        address: 'Mehrauli, South Delhi',
      },
    },
  },
  {
    displayName: 'Rajiv Chowk MegaPark',
    description:
      '8-level smart parking complex with real-time space tracking under Delhi Metro station',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g65.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g66.jpg',
    ],
    Address: {
      create: {
        lat: 28.6328,
        lng: 77.2195,
        address: 'Connaught Place Metro Station, Central Delhi',
      },
    },
  },
  {
    displayName: 'Yamuna Sports Garage',
    description:
      'Flood-resistant parking complex with athlete vehicle facilities and bicycle charging stations',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g67.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g68.jpg',
    ],
    Address: {
      create: {
        lat: 28.677,
        lng: 77.293,
        address: 'Yamuna Sports Complex, East Delhi',
      },
    },
  },
  {
    displayName: 'Diplomatic Enclave SecurePark',
    description:
      'High-security underground facility with diplomatic vehicle maintenance services',
    images: [
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g69.jpg',
      'https://my-bucker-name.s3.us-east-1.amazonaws.com/garage/g70.jpg',
    ],
    Address: {
      create: {
        lat: 28.5991,
        lng: 77.1875,
        address: 'Chanakyapuri, Diplomatic Enclave, Delhi',
      },
    },
  },
]

const appendUUID = (data) => {
  return data.map((d) => {
    return {
      ...d,
      uid: crypto.randomUUID(),
    }
  })
}

const appendSlotInGarage = (data) => {
  return data.map((d) => {
    return {
      ...d,
      Slots: {
        create: generateGarageSlots(),
      },
    }
  })
}

garageData = appendSlotInGarage(garageData)

export const seedData = {
  adminUserData: appendUUID(adminUserData),
  managerUserData: appendUUID(managerUserData),
  customerData: appendUUID(customerData),
  valetData: appendUUID(valetData),
  garageData,
}
