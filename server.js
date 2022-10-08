const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userdatas = require('./model');
const validator = require('validator');

const tweetidtask = require('./tweetidmodel')
const followtasks = require('./followtaskmodel')
const tweettasks = require('./tweettaskmodel')
const retweettasks = require('./retweettaskmodel')
const walletaddresstasks = require('./walletaddresstaskmodel')
const telegramtasks = require('./telegramtaskmodel')
const buytasks = require('./buytaskmodel')



dotenv.config({ path: './config.env' });
const URI = process.env.URI;

// http://35.78.65.206:3000
// https://heartfelt-starship-abfbb2.netlify.app/
app.use(cors({ credentials: true, origin: 'https://heartfelt-starship-abfbb2.netlify.app/' }));
app.use(express.json());

const PORT =8000 || process.env.PORT


mongoose.connect(URI);


mongoose.connection.once('open', () => {
    console.log('data base connestion is done');
   
  })
  

  app.get('/', (req, res) => {
    console.log('hi from the server');
    res.json('hi from server');
  });


  app.post('/fetchtweetidtaskresponse',async (req,res)=>{
    const {email} = req.body

    const response = await tweetidtask.findOne({
      email : email
    });

    res.json(response)
  })

  app.post('/fetchfollowtaskresponse',async (req,res)=>{
    const {loggedUserData} = req.body;

    const followTaskresponse = await followtasks.findOne({
      loggedUserData : loggedUserData
    });

    console.log('followTaskresponse')
    console.log(followTaskresponse)

    console.log('loggeduserdata')
    console.log(loggedUserData)

    res.json(followTaskresponse)

   
  })

  app.post('/fetchretweetTaskresponse',async (req,res)=>{
    const {loggedUserData} = req.body;

    const retweetTaskresponse = await retweettasks.findOne({
      loggedUserData: loggedUserData,
    });

   console.log('fetchretweetTaskresponse')
   console.log(retweetTaskresponse)

    res.json(retweetTaskresponse)

   
  })


  app.post('/fetchwalletAddressresponse',async (req,res)=>{
    const {loggedUserData} = req.body;

    const walletAddressresponse = await walletaddresstasks.findOne({
      loggedUserData: loggedUserData,
    });


   

    

    res.json(walletAddressresponse)

   
  })


  app.post('/fetchtweettaskresponse',async (req,res)=>{
    const {loggedUserData} = req.body;

    const tweetTaskresponse = await tweettasks.findOne({
      loggedUserData: loggedUserData,
    });


   

    

    res.json(tweetTaskresponse)

   
  })

  app.post('/fetchtelegramtaskresponse',async (req,res)=>{
    const {loggedUserData} = req.body;

    const telegramTaskresponse = await telegramtasks.findOne({
      loggedUserData: loggedUserData,
    });
 

    res.json(telegramTaskresponse)

   
  })

  app.post('/fetchbuytaskresponse',async (req,res)=>{
    const {loggedUserData} = req.body;

    const buyTaskresponse = await buytasks.findOne({
      loggedUserData: loggedUserData,
    });
 

    res.json(buyTaskresponse)

   
  })

  app.post('/savebuystatus',async (req,res)=>{
 
    console.log('savetweettask')
    console.log(req.body)
  
    try {
      const buytask = new buytasks({
        loggedUserData : req.body.loggedUserData,
        buy : true,
      });
      const savedData = await buytask.save();
      res.send(savedData);
  
  }catch (err) {
    console.log(err);
  
  }
  
  
  })
  
  app.post('/savetweettaskstatus',async (req,res)=>{
   
    console.log('savetweettask')
    console.log(req.body)
  
    try {
      const tweettask = new tweettasks({
        loggedUserData : req.body.loggedUserData,
        tweet : req.body.tweet,
      });
      const savedData = await tweettask.save();
      res.send(savedData);
  
  }catch (err) {
    console.log(err);
  
  }
  
  
  })


  app.post('/savetelegramtaskstatus',async (req,res)=>{

    const {joinTelegram,loggedUserData} = req.body;
   
  
    try {
      const telegram = new telegramtasks({
        loggedUserData : loggedUserData,
        joinTelegram: joinTelegram,
      });
      const savedData = await telegram.save();
      res.send(savedData);
  
  }catch (err) {
    console.log(err);
  
  }
  
   
  })
  
  
  app.post('/savefollowtaskstatus', async(req,res)=>{
  
    const {twitterFollow,loggedUserData} = req.body;
  
    try {
      const follow = new followtasks({
        loggedUserData : loggedUserData,
        twitterFollow: twitterFollow,
      });
      const savedData = await follow.save();
      res.send(savedData);
  
  }catch (err) {
    console.log(err);
  
  }
  
  })
  
  app.post('/savewallettaskstatus', async(req,res)=>{
  
    const {walletAddress,loggedUserData} = req.body;
  
    try {
      const walletaddress = new walletaddresstasks({
        loggedUserData : loggedUserData,
        walletAddress: walletAddress,
      });
      const savedData = await walletaddress.save();
      res.send(savedData);
  
  }catch (err) {
    console.log(err);
  
  }
  
  })
  
  
  app.post('/saveretweettaskstatus', async(req,res)=>{
  
    const {retweet,loggedUserData} = req.body;
  
    console.log(retweet,loggedUserData);
  
    try {
      const retwee = new retweettasks({
        loggedUserData : loggedUserData,
        retweet: retweet,
      });
      const savedData = await retwee.save();
      res.send(savedData);
  
  }catch (err) {
    console.log(err);
  
  }
  
  })


  app.post('/savetweetid',async (req,res)=>{

    const {email,tweetid} = req.body;
  
    console.log(tweetid);
  
    try {
      const tweetidsave = new tweetidtask({
        email : email,
        tweetid: tweetid,
      });
      const savedData = await tweetidsave.save();
      res.send(savedData);
  
  }catch (err) {
    console.log(err);
  
  }

  })



  app.post('/checkfollower',async (req,res)=>{

    const {checkFollower} = req.body;
  
    // console.log('check follower api request')
    // console.log(checkFollower)
      
  
  const config = {
    method: 'get',
    url: 'https://api.twitter.com/1.1/friendships/show.json?source_screen_name=zepcoinofficial&target_screen_name=' + checkFollower,
    headers: {
      Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAKRDhQEAAAAA9oKKdd9st2Veb53S%2BybkGn2z%2BZ8%3DXnCvsEJ1ekX0BZeCYuWjbqOtsAqircfWCMB7KsjtEMZaxRDaN1',
      Cookie: 'guest_id=v1%3A166391365524337597'
      }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    // console.log(response.data)
  
    // res.send(JSON.stringify(response.data))
    // res.send({data : JSON.stringify(response.data) , success : 1})
    res.json({ success : 1})
  })
  .catch(function (error) {
    console.log('error of check follower api')
    console.log(error);
    res.json({success : 0})
  });
  
  
    })


  app.listen(PORT, () => {
    console.log('server is run on port 8000');
})