
import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Shrey Dubey',
    email: 'shreydubey15@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Parth Ajmera',
    email: 'parth.ajmera@iiitb.org',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users