// const mongodb= require('mongodb')
// const MongoClient=mongodb.MongoClient
// C:\Users\Usuario1\mongodb\bin\mongod.exe --dbpath=C:\Users\Usuario1\mongodb-data
// npm i nodemon --save-dev
const {MongoClient,ObjectID}=require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser:true, useUnifiedTopology: true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Hernan',
    //     age:14
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'Luiggi',
    //         ager:28
    //     },{
    //         name:'Fernando',
    //         ager:28
    //     } 
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({_id: new ObjectID("5fcbbb4bafd9102230849b0a")},(error,user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age:28}).toArray((error,users)=>{
    //     console.log(users)
    // })

    // db.collection('users').find({age:28}).count((error,count)=>{
    //     console.log(count)
    // })

    // db.collection('task').findOne({_id: new ObjectID("5fcbbc51d516e90c18dc4423")},(error,task)=>{
    //     console.log(task)
    // })

    // db.collection('task').find({completed:false}).toArray((error,tasks)=>{
    //     console.log(tasks)
    // })

    // UPDATE
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5fcbb7ba9800830a50826c84")
    // },{
    //     // $set: {
    //     //     name: 'Mike'
    //     // }
    //     $inc:{
    //         age:1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('task').updateMany({
    //     completed: false
    // },{
    //     $set:{
    //         completed: true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    //DELETE
    // db.collection('users').deleteMany({
    //     ager: 28
    // }).then((result)=>{
    //     console.log(result.deletedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('task').deleteOne({
        description: 'Clean the house'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})


