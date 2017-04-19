'use strict'
let util = require('util');
module.exports = {
    addComplex: function(arg1,arg2){
        let argNo = arguments.length;
        let rArr = 0;
        let iArr = 0;
        let sign='+';
        for(let i=0; i< argNo;i++){
            let cmplx = arguments[i];
            let inputChr = cmplx.split('');
            let real=true;
            let img = false;
            let tempR="";
            let tempI="";
            for(let j=0; j<inputChr.length; j++){
                if(inputChr[j]==='-'||inputChr[j]==='+'&&j!=0)
                {
                    real=false;
                    img=true;
                    if(inputChr[j]==='-')
                    tempI+=inputChr[j];
                    continue;
                }
                if(real){
                    tempR+=inputChr[j];
                }else if(img){
                    if(inputChr[j]==='i')
                    continue;
                    tempI+=inputChr[j]
                }
                
            }
            rArr += parseInt(tempR);
            iArr += parseInt(tempI);
           
        }
        if(iArr<1){
            sign='';
        }
        return util.format('%s%s%si',rArr,sign, iArr);
    },

    subComplex: function(arg1,arg2){

    },

    multComplex: function(arg1,arg2){

    },

    divComplex: function(arg1,arg2){

    },

    transComplex: function(arg1,arg2){

    }

};
 let cmpx = require('./complex.js');
console.log(cmpx.addComplex("2+3i","3+4i").isComplex);