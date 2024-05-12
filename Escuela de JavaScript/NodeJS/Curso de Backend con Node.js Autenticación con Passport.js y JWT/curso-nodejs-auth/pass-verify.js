const bcrypt = require('bcrypt')

async function verifyPassword() {
  const myPassword = 'admin 123 .202'
  const hash = '$2b$10$Lr262lEzW5RdC80PlR51C.ZsPPA1HqpyXlCRTsrtm1ERqJ9Wrzp6C'
  const isMatch = await bcrypt.compare(myPassword, hash)
  console.log(isMatch)
}

verifyPassword()
