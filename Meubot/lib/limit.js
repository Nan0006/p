const fs = require('fs')

const daily = JSON.parse(fs.readFileSync('./data/diario.json'))
const deily = JSON.parse(fs.readFileSync('./data/dory.json'))
const doily = JSON.parse(fs.readFileSync('./data/dury.json'))
const dily = JSON.parse(fs.readFileSync('./data/diry.json'))
const deely = JSON.parse(fs.readFileSync('./data/deery.json'))
const daoly = JSON.parse(fs.readFileSync('./data/doory.json'))

const addLimit = (userId, _dir) => {
    const obj = { id: userId, time: Date.now() }
    _dir.push(obj)
    fs.writeFileSync('./data/diario.json', JSON.stringify(_dir))
	fs.writeFileSync('./data/dory.json', JSON.stringify(_dir))
	fs.writeFileSync('./data/dury.json', JSON.stringify(_dir))
	fs.writeFileSync('./data/diry.json', JSON.stringify(_dir))
	fs.writeFileSync('./data/deery.json', JSON.stringify(_dir))
	fs.writeFileSync('./data/doory.json', JSON.stringify(_dir))
}

const getLimit = (userId, _dir) => {
    let position = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _dir[position].time
    }
}  

module.exports = {
	addLimit,
	getLimit,
}
