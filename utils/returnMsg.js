const { ERR_CODE, SUCC_CODE } = require('./constant')
class Result {
    constructor(data, msg) {
        this.data = data;
        this.msg = msg;
    }
    json(res) {
        return this.createResult()
    }
    createResult() {
        let base = {
            data: this.data,
            msg: this.msg
        }
        return base
    }
    success(res) {
        this.code = SUCC_CODE
        return this.json(res)
    }
    fail(res) {
        this.code = ERR_CODE
        return this.json(res)
    }
}

module.exports = Result