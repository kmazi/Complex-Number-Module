
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

            it("should add 12, -30-4i and return -18-4i", function(){
                let result = complex.addComplex("12","-30-4i");
                expect(result).toBe("-18-4i");
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

            it("should subtract 90i, 3-5i and return -3+95i", function(){
                let result = complex.subComplex("90i","3-5i");
                expect(result).toBe("-3+95i");
            });

            it("should subtract -9i, 3-5i and return -3-5i", function(){
                let result = complex.subComplex("-9i","3-5i");
                expect(result).toBe("-3-4i");
            });

            it("should subtract 7-9i, 3-4i,4+2ai and return invalid", function(){
                let result = complex.subComplex("7-9i","3-4i","4+2ai");
                expect(result).toBe("Invalid input");
            });

             it("should subtract 7+9i, 3+4i, -5-5i, 2+12i and return 7-2i", function(){
                let result = complex.subComplex("7+9i","3+4i","-5-5i","2+12i");
                expect(result).toBe("7-2i");
            });

            it("should subtract -7+9i, 3+4i, -5-5i, 2+12i and return -7-2i", function(){
                let result = complex.subComplex("-7+9i","3+4i","-5-5i","2+12i");
                expect(result).toBe("-7-2i");
            });

            it("should subtract -7-9i, 3-4i, -5-5i, 2-12i and return -7+12i", function(){
                let result = complex.subComplex("-7-9i","3-4i","-5-5i","2-12i");
                expect(result).toBe("-7+12i");
            });
        });


        describe("when multiplying complex numbers", function(){
            it("should multiply -7+9i, 3+4i and return -57-1i", function(){
                let result = complex.multComplex("-7+9i","3+4i");
                expect(result).toBe("-57-1i");
            });
        });

        describe("when multiplying complex numbers", function(){
            it("should multiply 3+2i, 1+4i and return -5+14i", function(){
                let result = complex.multComplex("3+2i","1+4i");
                expect(result).toBe("-5+14i");
            });
        });

        describe("when multiplying complex numbers", function(){
            it("should multiply 12-2i, 2-1i and return 22-16i", function(){
                let result = complex.multComplex("12-2i","2-1i");
                expect(result).toBe("22-16i");
            });
        });

        describe("when multiplying complex numbers", function(){
            it("should multiply 12-20i, 12-1i, -4+3i and return 260+1380i", function(){
                let result = complex.multComplex("12-20i","12-1i","-4+3i");
                expect(result).toBe("260+1380i");
            });
        });

         describe("when multiplying complex numbers", function(){
            it("should multiply -2-20i, 3+1i, -14+3i, 1+1i and return 260+1380i", function(){
                let result = complex.multComplex("-2-20i", "3+1i", "-14+3i", "1+1i");
                expect(result).toBe("-920+900i");
            });
        });

        describe("when dividing complex numbers", function(){
             it("should divide 3-90i, 3+5i and return -12.97-8.382i", function(){
                let result = complex.divComplex("3-90i","3+5i");
                expect(result).toBe("-12.97-8.38i");
            });

            it("should divide -43+90i, 3-15i and return -6.32-1.60i", function(){
                let result = complex.divComplex("-43+90i","3-15i");
                expect(result).toBe("-6.32-1.60i");
            });

             it("should divide -43+9i, 33-15i and return -1.18-0.26i", function(){
                let result = complex.divComplex("-43+9i", "33-15i");
                expect(result).toBe("-1.18-0.26i");
            });

        });

        describe("when formating complex numbers", function(){
             it("should format 3-90i, 3+5i and return {rParts: [3, 3], iParts: [-90, 5]}", function(){
                let result = complex.cmplxFormat("3-90i","3+5i");
                expect(result).toBe({rParts: [3, 3], iParts: [-90, 5]});
            });

            it("should format 90i, 3-15i and return {}", function(){
                let result = complex.cmplxFormat("90i","3-15i");
                expect(result).toBe({rParts: [0, 3], iParts: [90, -15]});
            });

             it("should format 9i, -15i and return {}", function(){
                let result = complex.cmplxFormat("9i", "-15i");
                expect(result).toBe({rParts: [0, 0], iParts: [9, -15]});
            });

        });

    });
