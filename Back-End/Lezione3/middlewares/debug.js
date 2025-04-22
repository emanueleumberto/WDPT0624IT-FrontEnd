// Middleware custom

function logger(req, res, next) {
    console.log("Sono il middleware logger! Url: " + req.url)
    next();
}

function ceckApiKey(req, res, next) {
    // http://localhost:3001/users?token=qwerty
   const apiKey = req.query.token;
    if(apiKey !== 'qwerty') {
        res.status(401).json({error: "Non autorizzato!!!"})
    } else {
        next();
    } 
}

function singleLog(req, res, next) {
    console.log("Sono il middleware singleLog!!!")
    next();
}

module.exports = {logger, ceckApiKey, singleLog}