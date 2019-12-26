const sql = require('./db')

let product = {}

product = function(obj) {
    this.name = obj.name;
    this.price = obj.price 
}

product.find = () => {
    return new Promise((resolve, reject) => {
        sql.query('SELECT * FROM product', (err, results) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(results)
            }
        })
    })
}

product.findById = (id) => {
    return new Promise((resolve, reject) => {
        sql.query('SELECT * FROM product WHERE id = ?', id, (err, results) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(results)
            }
        })
    })
}

product.save = (objProduct) => {
    return new Promise((resolve, reject) => {
        sql.query('INSERT INTO product set ?', objProduct, (err, result) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(result)
            }
        })
    })
}

module.exports = product;