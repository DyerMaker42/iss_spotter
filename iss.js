const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) { 
  // use request to fetch IP address from JSON API
  request.get(`https://api.ipify.org?format=json`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    console.log(data, 'data before [0]')
    let ip = data.ip
    console.log('should be ip', ip)
})
}
fetchMyIP()
module.exports = { fetchMyIP };