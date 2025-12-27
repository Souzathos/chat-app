let io;

function setIO(newIO) {
  io = newIO;
}

function getIO() {
  if (!io) throw new Error("Socket.IO não inicializado");
  return io;
}

module.exports = { setIO, getIO };
