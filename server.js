const express = require('express');
const mongoose =require('mongoose');


const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(routes);

//app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dreams-and-thoughts',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.set('debug',true);

app.listen(PORT, ()=> console.log(`connected on locahost ${PORT}`))