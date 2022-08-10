const db = require('./db.js'); //引入封装的db模块

//新增一个用户
let userData = {
   table: 'sys_user',
   datas: {
        ID: 'b57ce5e8-a2ff-45f8-b92e-97e136d9187d',
        ACCOUNT: 'admin1',
        PASSWORD: '123456',
        NICK_NAME: '管理员1',
        SYS_ID: 'b67ce5e8-a2ff-45f8-b92e-97e136d9187d',
        STATUS: 1,
        CREATE_TIME: '2019-07-06 14:20:30'
    }
};

db.insert(userData).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

OR

let addUser = async() => {
    try {
        let addResult = await db.insert(userData);
          
        //success do sth...
    } catch (error) {
        //error do sth...
    }
}

