const jwt = require('jsonwebtoken')

const secret = 'myCat'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcxNTYyMjMxNX0.dxkVkD7fnuna1q28zv1SCbdJ8X7jZUMIn4gaprpL5zM'

function verifyToken(token, secret) {
  return jwt.verify(token, secret)
}

const payload = verifyToken(token, secret)
console.log(payload)
