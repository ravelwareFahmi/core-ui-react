const io = require('socket.io-client')
const socket = io(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_SOCKET_PORT}`)

export default socket