class Logger {
  info(message) {
    const time = new Date().toLocaleTimeString();
    console.log(`[INFO - ${time}] ${message}`);
  }

  error(message) {
    const time = new Date().toLocaleTimeString();
    console.error(`[ERROR - ${time}] ❌ ${message}`);
  }
}
module.exports = Logger;
