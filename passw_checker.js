#!/usr/bin/node

// Check for repeating patterns in a password
const tooShort = "PASSWORD IS TOO SHORT";
const seqFound = "ERROR, SEQUENCE FOUND";
const noSeqFound = "PASWORD SECURE, NO SEQUENCE FOUND";


function checkPassword(pass) {
    if (pass.length < 8) {
        return tooShort
    } else {
        for (i = 0; i < pass.length - 2; i++) {
            let idx1 = pass.charCodeAt(i);
            let idx2 = pass.charCodeAt(i + 1);
            let idx3 = pass.charCodeAt(i + 2);
            let idx4 = pass.charCodeAt(i + 4);
            let idx5 = pass.charCodeAt(i + 5);

            let x;
            let myRegex = /5$/;
            let firstDiffernce = idx2 - idx1;
            let secondDifference = idx3 - idx2;
            let firstSum = idx2 + idx1;
            let secondSum = idx3 + idx2;

            switch (true) {
                case firstDiffernce === secondDifference:
                    return seqFound + ` at ${String.fromCharCode(idx1)}${String.fromCharCode(idx2)}${String.fromCharCode(idx3)} ` + " case 1" 
                    break;
                case (idx2 -  idx1) === (idx3 - idx2):
                    return seqFound + ` at ${String.fromCharCode(idx1)}${String.fromCharCode(idx2)}${String.fromCharCode(idx3)} ` + " case 2"
                    break;
                case firstSum === secondSum:
                    return seqFound + ` at ${String.fromCharCode(idx1)}${String.fromCharCode(idx2)}${String.fromCharCode(idx3)}` + " case 3"
                default:
                    return noSeqFound
            }
        }
    }
}

console.log(checkPassword("1122223333"))
