'use strict'
let util = require('util');

module.exports = {
    cmplxFormat: function(arg1,arg2){
        let rParts = [], iParts = [];
        let cmplxObj = {};
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
        cmplxObj.rParts = rParts;
        cmplxObj.iParts = iParts;
        return cmplxObj;
    },

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

    multComplex: function(arg1,arg2){
        let input =[];
        for(let i=0; i<arguments.length; i++){
            input[i] = arguments[i]; 
        }
        let cmplxNo = ""
        
        while(input.length>1){
            let sign='+';
            let cmplxObj = this.cmplxFormat(input[0], input[1]);
            let a  = (cmplxObj.rParts)[0], b = (cmplxObj.rParts)[1];
            let c = (cmplxObj.iParts)[0], d = (cmplxObj.iParts)[1];
            let rAns = a * b - c * d;
            let iAns = a * d + c * b;
            if(iAns<1){
                sign='';
            }
            cmplxNo = util.format('%s%s%si',rAns,sign, iAns);
            input.splice(0, 2);
            input.unshift(cmplxNo);
        }
        return cmplxNo;
    },

roundNumber: function(number,decimal_points) {
	if(!decimal_points) return Math.round(number);
	if(number == 0) {
		var decimals = "";
		for(var i=0;i<decimal_points;i++) decimals += "0";
		return "0."+decimals;
	}

	var exponent = Math.pow(10,decimal_points);
	var num = Math.round((number * exponent)).toString();
	return num.slice(0,-1*decimal_points) + "." + num.slice(-1*decimal_points)
},

    divComplex: function(arg1,arg2){
        let input =[];
        for(let i=0; i<arguments.length; i++){
            input[i] = arguments[i]; 
        }
        let cmplxNo = ""
        
        while(input.length>1){
            let denominator = 0;
            let sign='+';
            let cmplxObj = this.cmplxFormat(input[0], input[1]);
            let a  = (cmplxObj.rParts)[0], c = (cmplxObj.rParts)[1];
            let b = (cmplxObj.iParts)[0], d = (cmplxObj.iParts)[1];
            denominator = Math.pow(c,2) + Math.pow(d,2);
            let rAns = (a * c + b * d)/denominator;
            rAns = this.roundNumber(rAns, 2);
            let iAns = (b * c - a*d)/denominator;
            iAns = this.roundNumber(iAns, 2);
            
            if(iAns<1){
                sign='';
            }
            cmplxNo = util.format('%s%s%si',rAns,sign, iAns);
            input.splice(0, 2);
            input.unshift(cmplxNo);
        }
        return cmplxNo;
    },

    transComplex: function(arg1,arg2){

    }

};
 let cmpx = require('./complex.js');
console.log(cmpx.divComplex("3-90i","3+5i"));