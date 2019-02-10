function mustBeInteger(req, res, next) {
    const id = req.params.id

    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({
            message: 'Id harus integer gan',
        })
    } else {
        next()
    }
}

function checkFieldPost(req, res, next) {
    const { title, content, tags } = req.body

    if (title && content && tags) {
        next()
    } else {
        res.status(400).json({ message: 'Fields kurang sehat gan' })
    }
}

module.exports = {
    mustBeInteger,
    checkFieldPost,
}
