const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abinashupwork:TFRWKJeL1Ha1yRTb@cluster0.qhy1cum.mongodb.net/zenblog', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})