const express = require('express')
const router = express.Router()
const {Device} = require('../mongodb/db')

router.get('/', (req, res) => {
    Device.find({}, (err, result) =>{
        res.send(result)
    })
})

router.post('/new', (req, res) => {
    console.log(req.body)
    let newDevice = new Device({uuid:req.body.uuid})
    newDevice.save(err => {
        if (err) {
            console.log(err)
            res.send({success:false})
        }
        res.redirect('/devices')
    })
})

module.exports = router