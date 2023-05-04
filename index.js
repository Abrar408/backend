const express = require('express');
const cors = require('cors');
const {logger} = require('./middleware/logEvents');
const app = express();
const PORT = 3002;
const data = {
    general: {
    //   avatar: avatar11, 
      username: 'johndoe',
      fullName: 'John Doe',
      email: 'granger007@hogward.com',
      company: 'PIXINVENT'
    },
    info: {
      bio: '',
      dob: null,
      country: 'USA',
      website: '',
      phone: 6562542568
    },
    social: {
      socialLinks: {
        twitter: 'https://www.twitter.com',
        facebook: '',
        google: '',
        linkedIn: 'https://www.linkedin.com',
        instagram: '',
        quora: ''
      },
      connections: {
        twitter: {
        //   profileImg: avatar11,
          id: 'johndoe'
        },
        google: {
        //   profileImg: avatar3,
          id: 'luraweber'
        },
        facebook: {},
        github: {}
      }
    },
    notification: {
      commentOnArticle: true,
      answerOnForm: true,
      followMe: false,
      newAnnouncements: true,
      productUpdates: true,
      blogDigest: false
    }
  }
app.use(logger) ;//log requests to console and logfile 

app.use(cors({
    origin: '*',
    credentials:true,
    optionsSuccessStatus:200
}));

app.get('/account', (req, res) => {
    res.status(200).send({data})
})

app.listen(PORT,()=>{ console.log(`Express server listening on port ${PORT}`) });