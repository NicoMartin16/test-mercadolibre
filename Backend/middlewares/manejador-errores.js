const { request, response } = require("express")

const manejarError = (err,req = request,res = response, next) => {
    console.log(err);
    res.status(500).send('Ha ocurrido un error en el servidor')
}

module.exports = {
    manejarError
}