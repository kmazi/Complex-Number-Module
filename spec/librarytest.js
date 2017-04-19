
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

            it("should detect invalid inputs like this: [6,4,5]", function(){
                let result = complex.addComplex("24+0i","0+4i",[6,4,5]);
                expect(result).toBe("Invalid input");
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

            it("should add 2a-3i, 3+4i, 3-12i", function(){
                let result = complex.addComplex("2a-3i","3+4i", "3-12i");
                expect(result).toBe("Invalid input");
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

            it("should add -21-3i to -30-4i", function(){
                let result = complex.addComplex("-21-3i","-30-4i");
                expect(result).toBe("-51-7i");
            });

            it("should add -21-3i, 3-12i, 10+10i, 2-2i, -30-4i", function(){
                let result = complex.addComplex("-21-3i","3-12i","10+10i","2-2i","-30-4i");
                expect(result).toBe("-36-11i");
            });

            it("should add a-2i, -30-4i", function(){
                let result = complex.addComplex("a-2i","-30-4i");
                expect(result).toBe("Invalid input");
            });

            it("should add 12-2i, -30-4ei", function(){
                let result = complex.addComplex("12-2i","-30-4ei");
                expect(result).toBe("Invalid input");
            });
        });


        describe("when subtracting complex numbers", function(){
            it("should subtract 12+2i, 30+4i and return -18-2i", function(){
                let result = complex.subComplex("12+2i","30+4i");
                expect(result).toBe("-18-2i");
            });

            it("should subtract 7-9i, 3-4i and return 4-5i", function(){
                let result = complex.subComplex("7-9i","3-4i");
                expect(result).toBe("4-5i");
            });

            it("should subtract 7-9i, 3-4i,4+2ai and return invalid", function(){
                let result = complex.subComplex("7-9i","3-4i","4+2ai");
                expect(result).toBe("Invalid input");
            });

             it("should subtract 7+9i, 3+4i, -5-5i, 2+12i and return 7-2i", function(){
                let result = complex.subComplex("7+9i","3+4i","-5-5i","2+12i");
                expect(result).toBe("7-2i");
            });

            it("should subtract -7+9i, 3+4i, -5-5i, 2+12i and return 7-2i", function(){
                let result = complex.subComplex("-7+9i","3+4i","-5-5i","2+12i");
                expect(result).toBe("-7-2i");
            });
        });


        describe("when multiplying complex numbers", function(){

        });

        describe("when dividing complex numbers", function(){

        });

        describe("when transposing complex numbers", function(){

        });

        describe("when parsing complex numbers, ", function(){
        
        });
    });
