const fs = require('fs')

// Fungsi cari array id terakhir dan increment 1 ketika generate id baru
const getNewId = array => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}

// Return date
const getNewDate = () => new Date().toString()

// Return sebuah promise
function mustBeInArray(array, id) {
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id)
        if (!row) {
            reject({
                message: 'Id tidak sehat',
                status: 404,
            })
        }
        resolve(row)
    })
}

// Buat array baru untuk file json
function writeJSONFiledude(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'UTF8', err => {
        if (err) console.log(err)
    })
}

module.exports = {
    getNewId,
    getNewDate,
    mustBeInArray,
    writeJSONFiledude,
}
