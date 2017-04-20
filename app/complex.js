'use strict'
let util = require('util');

module.exports = {
    // helper: function(inputChr, tempR, tempI, real, img){
    //     for(let j=0; j<inputChr.length; j++){
    //             if(inputChr[j]==='-'&&j===0){
    //                 tempR+= inputChr[j];
    //                 continue;
    //             }
    //             if(inputChr[j]==='-'||inputChr[j]==='+'&&j!=0)
    //             {
    //                 real=false;
    //                 img=true;
    //                 if(inputChr[j]==='-')
    //                 tempI+=inputChr[j];
    //                 continue;
    //             }

    //             if(real){
    //                 if(isNaN(inputChr[j]))
    //                 {
    //                     return "Invalid input";
    //                 }
    //                 tempR+= inputChr[j];
    //             }
    //             else if(img){
    //                 if(inputChr[j]==='i'){
    //                     continue;
    //                 }
    //                 else if(isNaN(inputChr[j]))
    //                 {
    //                     return "Invalid input";
    //                 }else
    //                 tempI+=inputChr[j]
    //             }
    //             else
    //             return "Invalid input"; 
                
    //         }
    // },
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
        }
        if(iArr<1){
            sign='';
        }
        return util.format('%s%s%si',rArr,sign, iArr);
    },

    subComplex: function(arg1,arg2){
        
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
            if(i===0){
                rArr = parseInt(tempR);
                iArr = parseInt(tempI);
            }else{
                rArr -= parseInt(tempR);
                iArr -= parseInt(tempI);
            }
            
        }
        if(iArr<1){
            sign='';
        }
        return util.format('%s%s%si',rArr,sign, iArr);
    },

    mHelper: function(arg1,arg2){
        let rParts = [], iParts = [];
        let rAns = 0, iAns = 0;
        let sign='+';
        for(let i = 0; i< arguments.length; i++){
            let inputChr = arguments[i].split('');
            let real=true, img = false;
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
            rParts[i] = parseInt(tempR);
            iParts[i] = parseInt(tempI);
        }
        rAns = (rParts[0] * rParts[1]) - (iParts[0] * iParts[1]);
        iAns = (rParts[0] * iParts[1]) + (iParts[0] *  rParts[1]);
         if(iAns<1){
            sign='';
        }
        return util.format('%s%s%si',rAns,sign, iAns);
    },

    multComplex: function(arg1,arg2){
        let input =[];
        for(let i=0; i<arguments.length; i++){
            input[i] = arguments[i]; 
        }
        let cmplxNo = ""
        while(input.length>1){
            cmplxNo = this.mHelper(input[0], input[1]);
            input.splice(0, 2);
            input.unshift(cmplxNo);
        }
        return cmplxNo;
    },

    divComplex: function(arg1,arg2){

    },

    transComplex: function(arg1,arg2){

    }

};
 let cmpx = require('./complex.js');
console.log(cmpx.multComplex("12-2i","2-1i"));