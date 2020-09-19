const express = require('express');

const app = express();


app.use('/api/users',(req,res,next) => {
    const users = [
        {
            id: '1',
            name: 'Abhijit',
            email: 'abhijitmone2@gmail.com',
            password: 'Abhijit86@',

        }
    ];
    res.status(200).json(
        {
            message: 'Successfully registerd now please login, now please login',
            users : users
        }
    );
});

module.exports = app;