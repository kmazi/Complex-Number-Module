'use strict'
let util = require('util');

module.exports = {
    addComplex: function(arg1,arg2){
        const argNo = arguments.length;
        let rArr = 0;
        let iArr = 0;
        let sign='+';
        for(let i=0; i< argNo;i++){
            let cmplx = arguments[i];
            if(typeof cmplx != 'string')
            return "Invalid input";
            let inputChr = cmplx.split('');
            let real=true;
            let img = false;
            let tempR="";
            let tempI="";
            for(let j=0; j<inputChr.length; j++){
                if(inputChr[j]==='-'&&j===0){
                    tempR+= inputChr[j];
                    continue;
                }
                if(inputChr[j]==='-'||inputChr[j]==='+'&&j!=0)
                {
                    real=false;
                    img=true;
                    if(inputChr[j]==='-')
                    tempI+=inputChr[j];
                    continue;
                }

                if(real){
                    if(isNaN(inputChr[j]))
                    {
                        return "Invalid input";
                    }
                    tempR+= inputChr[j];
                }
                else if(img){
                    if(inputChr[j]==='i'){
                        continue;
                    }
                    else if(isNaN(inputChr[j]))
                    {
                        return "Invalid input";
                    }else
                    tempI+=inputChr[j]
                }
                else
                return "Invalid input"; 
                
            }
            
            rArr += parseInt(tempR);
            iArr += parseInt(tempI);
        //    if(isNaN(rArr) || isNaN(iArr))
        //     return "Invalid input";
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
console.log(cmpx.addComplex("21-3i","30-4i").isComplex);