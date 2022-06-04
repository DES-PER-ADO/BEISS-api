const mongoose = require('mongoose')

const dbName = 'beiss';
const path = "mongo:27017";
const dbUrl = `mongodb://${path}/${dbName}`;

mongoose.connect(dbUrl);

var deviceSchema = mongoose.Schema({
    uuid: String,
    partialPrivateKey: String,
    isRegistered: Boolean,
    userId: String
})
var kgcParamSchema = mongoose.Schema({
    masterSk: String,
    masterPk: String,
    param: String
})
var tokenSchema = mongoose.Schema({
    tokenId: String,
    uuid: String,
    userId: String
})

var Device = mongoose.model('Device', deviceSchema);
var KGCParam = mongoose.model('KGCParamSchema', kgcParamSchema);
var Token = mongoose.model('Token', tokenSchema);

module.exports = {Device, KGCParam, Token}