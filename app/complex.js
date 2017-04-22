'use strict'

module.exports = {

    buildArrayArg: function(args){
        let input = [];
        for(let i=0; i<args.length; i++){
            input.push(args[i]);  
        }
        return input;
    },

    cmplxFormat: function(arg1,arg2){
        let rParts = [], iParts = [];
        let cmplxObj = {};
        for(let i = 0; i< arguments.length; i++){
            if(typeof arguments[i] != 'string' || arguments[i] === ''){
                return 'Invalid input';
            }
            let inputChr = arguments[i].split(/\+|\b-/);
            let tempR=0;
            let tempI=0;
            for(let j=0; j<inputChr.length; j++){
                let val = inputChr[j];
                    if(isNaN(val) && val.indexOf('i') != -1 && val.indexOf('i') === (val.length-1))
                    {
                        let negIndex = arguments[i].indexOf(val) - 1;
                        if(arguments[i][negIndex] === '-'){
                            val = '-'+val;
                        }
                        tempI = (val.split('i'))[0];
                        if(isNaN(tempI)){
                            return 'Invalid input';
                        }
                    }else if(!isNaN(inputChr[j])){
                        tempR = inputChr[j];
                    }else{
                        return 'Invalid input';
                    }
            }
            rParts[i] = parseInt(tempR);
            iParts[i] = parseInt(tempI);
        }
        cmplxObj.rParts = rParts;
        cmplxObj.iParts = iParts;
        return cmplxObj;
    },

    formatResult: function(rAns, iAns){
        rAns = rAns.toString();
        iAns = iAns.toString() + 'i';
        let realDecIndex = rAns.indexOf('.');
        let imgDecIndex = iAns.indexOf('.');
        if(realDecIndex >= 0){
            rAns = rAns.substring(0, realDecIndex+3);
        }
        if(imgDecIndex >= 0){
            iAns = iAns.substring(0, imgDecIndex+3) + 'i';
        }
        if(iAns.indexOf('-')!=0){
            if(rAns != '0'){
                iAns = '+' + iAns;
            }             
             if(iAns === '+0i'){
            iAns = '';
            }  
        }
        if(iAns === '0i'){
            iAns = '';
        }
        if(rAns === '0'){
            rAns = '';
        }    
        return rAns + iAns;
    },

    addComplex: function(arg1,arg2){
        let input = this.buildArrayArg(arguments);
        let cmplxNo = '';
        
        while(input.length>1){
            let cmplxObj = this.cmplxFormat(input[0], input[1]);
            if(cmplxObj === 'Invalid input'){
                return 'Invalid input';
            }

            let a  = (cmplxObj.rParts)[0];
            let b = (cmplxObj.rParts)[1];
            let c = (cmplxObj.iParts)[0];
            let d = (cmplxObj.iParts)[1];
            let rAns = a + b;
            let iAns = c + d;
           
            cmplxNo = this.formatResult(rAns, iAns);
            input.splice(0, 2);
            input.unshift(cmplxNo);
        }
        return cmplxNo;
    },

    subComplex: function(arg1,arg2){
        let input = this.buildArrayArg(arguments);
        let cmplxNo = '';
        
        while(input.length>1){
            let cmplxObj = this.cmplxFormat(input[0], input[1]);
            if(cmplxObj ==='Invalid input'){
            return 'Invalid input';
            }

            let a  = (cmplxObj.rParts)[0];
            let b = (cmplxObj.rParts)[1];
            let c = (cmplxObj.iParts)[0];
            let d = (cmplxObj.iParts)[1];
            let rAns = a - b;
            let iAns = c - d;
           
            cmplxNo = this.formatResult(rAns, iAns);
            input.splice(0, 2);
            input.unshift(cmplxNo);
        }
        return cmplxNo;
    },

    multComplex: function(arg1,arg2){
        let input = this.buildArrayArg(arguments);
        let cmplxNo = '';
        
        while(input.length>1){
            let cmplxObj = this.cmplxFormat(input[0], input[1]);
            if(cmplxObj === 'Invalid input'){
            return 'Invalid input';
            }
        
            let a  = (cmplxObj.rParts)[0];
            let b = (cmplxObj.rParts)[1];
            let c = (cmplxObj.iParts)[0];
            let d = (cmplxObj.iParts)[1];
            let rAns = a * b - c * d;
            let iAns = a * d + c * b;
           
            cmplxNo = this.formatResult(rAns, iAns);
            input.splice(0, 2);
            input.unshift(cmplxNo);
        }
        return cmplxNo;
    },

    divComplex: function(arg1,arg2){
        let input = this.buildArrayArg(arguments);
        let cmplxNo = '';
        
        while(input.length>1){
            let denominator = 0;
            let cmplxObj = this.cmplxFormat(input[0], input[1]);
            if(cmplxObj ==='Invalid input'){
            return 'Invalid input';
            }

            let a  = (cmplxObj.rParts)[0]; 
            let c = (cmplxObj.rParts)[1];
            let b = (cmplxObj.iParts)[0];
            let d = (cmplxObj.iParts)[1];
            denominator = Math.pow(c,2) + Math.pow(d,2);
            let rAns = (a * c + b * d)/denominator;
            let iAns = (b * c - a*d)/denominator;
            
            cmplxNo = this.formatResult(rAns, iAns);
            input.splice(0, 2);
            input.unshift(cmplxNo);
        }
        return cmplxNo;
    }

};
 let complex = require('./complex.js');
console.log(complex.addComplex("12-2i","-30-4ei"));
console.log(complex.subComplex("-3+90i","3-15i"));
console.log(complex.multComplex("2","3i"));
console.log(complex.divComplex("2+3i","3+4i"));