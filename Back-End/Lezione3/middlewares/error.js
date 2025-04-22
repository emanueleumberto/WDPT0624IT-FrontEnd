function errorHandler(err, req, res, next) {
    const message = err.message
    console.log(err)
    //console.log("Sono il middleware errorHandler - " + message)
    if(err.status === 401) {
        res.status(401).send("Sono il middleware errorHandler - " + message)
    } else {
        next(err);
    }
    
}

function pageNotFoundHandler(req, res, next) {
    console.log("Error!!!")
    res.status(404).send("Page not Found")
}

module.exports = {errorHandler, pageNotFoundHandler}