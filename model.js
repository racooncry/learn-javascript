const fs = require('fs');
const db=require('./db');

let files = fs.readdirSync(__dirname+"\\model");

let jsFiles = files.filter((f)=>{
    return f.endsWith(".js");
},files);

module.exports={};

for(let f of jsFiles){

    console.log(`import model from file ${f}...`);
    let name=f.substring(0,f.length-3);
    module.exports[name]=require(__dirname+"\\model\\"+f);
}

module.exports.sync=()=>{
    db.sync();
};