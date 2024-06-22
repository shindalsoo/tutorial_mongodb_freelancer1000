const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const dbName = 'test';
const url = 'mongodb://shindalsoo:sds9050@localhost:37017/test?authSource=admin';

console.log('DB연결시작');
MongoClient.connect(url)
    .then(database => {
        console.log('연결문제없음');
        const db = database.db('test');
        const collection = db.collection('freelancers');
        // collection.insertOne({"name":"shindalsoo"});
        const data = fs.readFileSync('./Freelancers1000.json');
        const docs = JSON.parse(data.toString());
        collection.insertMany(docs)
        // docs.forEach(element => {
        //     console.log(element);
        // });
        // for (var one in docs){
        //     console.log(one.array.stringify);
        // }
        console.log('데이타추가했음');
    })
    .catch(err=>{
        console.log('에러났음');
        console.log(err);
    })
    .finally(()=>{
        console.log('끝');
        // MongoClient.close();
    });

// async function main() {
//     await MongoClient.connect();
//     console.log('Connected successfully to server');
//     const db = MongoClient.db(dbName);
//     const collection = db.collection('freelancers');
//     return 'done.';
// }
// main()
//     .then(console.log)
//     .catch(console.error)
//     .finally(()=>MongoClient.close());
