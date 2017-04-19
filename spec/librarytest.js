
var jasmine = require('jasmine');
var expect = jasmine.expect;
var complex = require('./app/complex.js')

    describe("Complex number functions library", function(){
        describe("adding two complex numbers", function(){
            it("should add 2+3i to 3+4i", function(){
                let result = complex.addComplex("2+3i","3+4i");
                expect(result).toBe("5+7i");
            });

            it("should add 2-3i to 3+4i", function(){
                let result = complex.addComplex("2-3i","3+4i");
                expect(result).toBe("5+1i");
            });
            
        });

        describe("subtracting complex numbers", function(){

        });

        describe("multiplying complex numbers", function(){

        });

        describe("dividing complex numbers", function(){

        });

        describe("transposing complex numbers", function(){

        });

        describe("parsing complex numbers", function(){

        });
    });
