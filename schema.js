var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
     CURP:{
         type: String,
         required: true,
         length: 16,
         match: '/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/'
     },
     Nombre:{
         type: String,
         required: true
     },
     email: {
        type: String,
        required: true,
        match: /.+@.+\..+/,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        length:16 ,
        match: '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/',
   
    },
    fecha_nac:{
        type: date,
        required: true
    },
    domicilio_calle:{
        type: String,
        required: true
    },
    cp:{
        type: String,
        required: true
    },
    edad:{
        type: Number
        ,
        required: true
    },
     comments:[{body:String,date:Date}],
     date:{type:Date,default:Date.now},
     hidden:{type:Boolean,default:false},
     meta:{
         votes: Number,
         favs: Number
     }
});