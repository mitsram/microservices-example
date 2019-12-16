const sql = require('./db.js')

let Product = (product) => {
    this.name = product.name
    this.price = product.price
}

Product.createProduct = (new_product, result) => {
    sql.query("INSERT INTO product SET ?", new_product, (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res.insertedId)
        }
    })
}

Product.getByProductId = (product_id, result) => {
    sql.query("SELECT * FROM Product WHERE id = ?", product_id, (err, res) => {
        if (err) {
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

Product.getAllProducts = (result) => {
    sql.query("SELECT * FROM product", (err, res) => {
        if (err) {
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

Product.updateProduct = (product, result) => {
    let update = [product.name, product.price, product.id]
    sql.query("UPDATE product SET name = ?, price = ? WHERE id = ?", update, (err, res) => {
        if (err) {
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

Product.remove = (id, result) => {
    sql.query("DELETE FROM product WHERE id = ?", id, (err, res) => {
        if (err) {
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

module.exports = Product