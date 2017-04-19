
var jasmine = require('jasmine');
var complex = require('../app/complex.js')

    describe("Using the Complex number functions library: ", function(){
        describe("when adding two complex numbers", function(){
            it("should add 2+3i to 3+4i and return 5+7i", function(){
                let result = complex.addComplex("2+3i","3+4i");
                expect(result).toBe("5+7i");
            });

            it("should add 24+31i to 300+4i and return 324+35i", function(){
                let result = complex.addComplex("24+31i","300+4i");
                expect(result).toBe("324+35i");
            });

            it("should add 24+0i to 0+4i and return 24+4i", function(){
                let result = complex.addComplex("24+0i","0+4i");
                expect(result).toBe("24+4i");
            });

             it("should add correctly 34+4i, 0+4i, 2+41i", function(){
                let result = complex.addComplex("34+4i","0+4i", "2+41i");
                expect(result).toBe("36+49i");
            });

            it("should add correctly 8+4i, 20+6i, 2+4i", function(){
                let result = complex.addComplex("8+4i","20+6i", "2+4i");
                expect(result).toBe("30+14i");
            });

            it("should add 2-3i to 3+4i", function(){
                let result = complex.addComplex("2-3i","3+4i");
                expect(result).toBe("5+1i");
            });

            it("should add 21-3i to 3+4i", function(){
                let result = complex.addComplex("21-3i","3+4i");
                expect(result).toBe("24+1i");
            });

            it("should add 21-3i, 3+4i, 3-12i", function(){
                let result = complex.addComplex("21-3i","3+4i", "3-12i");
                expect(result).toBe("27-11i");
            });

             it("should add 21-3i, 3+4i, 3-12i, 10+10i, 2-2i", function(){
                let result = complex.addComplex("21-3i","3+4i", "3-12i","10+10i","2-2i");
                expect(result).toBe("39-3i");
            });

            it("should add 21-3i to 30-4i", function(){
                let result = complex.addComplex("21-3i","30-4i");
                expect(result).toBe("51-7i");
            });

            it("should add -21-3i to 30-4i", function(){
                let result = complex.addComplex("-21-3i","30-4i");
                expect(result).toBe("9-7i");
            });
            
        });

        describe("when subtracting complex numbers", function(){

        });

        describe("when multiplying complex numbers", function(){

        });

        describe("when dividing complex numbers", function(){

        });

        describe("when transposing complex numbers", function(){

        });

        describe("when parsing complex numbers, ", function(){
            // it("should return true when checking if 2+3i is a complex number", function(){
            //     let num = complex.parseComplex("2+3i");
            //     expect(num.isComplex).toBe(true);
            // });

            // it("should return true when checking if 50+31i is a complex number", function(){
            //     let num = complex.parseComplex("50+31i");
            //     expect(num.isComplex).toBe(true);
            // });

            // it("should return true when checking 3i+5 is a complex number", function(){
            //     let num = complex.parseComplex("3i+5");
            //     expect(num.isComplex).toBe(true);
            // });

            // it("should return false when checking -32+5i is a complex number", function(){
            //     let num = complex.parseComplex("-32+5i");
            //     expect(num.isComplex).toBe(true);
            // });

            // it("should return false when checking 3i+love is a complex number", function(){
            //     let num = complex.parseComplex("3i+love");
            //     expect(num.isComplex).toBe(false);
            // });

            // it("should return 3 as the imaginary part for 2+3i", function(){
            //     let num = complex.parseComplex("2+3i");
            //     expect(num.complex).toEqual(3);
            // });
        });
    });
