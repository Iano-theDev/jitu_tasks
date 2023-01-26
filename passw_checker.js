#!/usr/bin/node

// Check for repeating patterns in a password
const tooShort = "PASSWORD IS TOO SHORT";
const seqFound = "ERROR, SEQUENCE FOUND";
const noSeqFound = "PASWORD SECURE, NO SEQUENCE FOUND";


function checkPassword(pass) {
    if (pass.length < 4) {
        return tooShort + " " + `\nPASSWORD LENGTH IS ${pass.length} \nPLEASE ENTER A PASSWORD WITH AT LEAST 4 CHARACTERS`
    } else {
        for (i = 0; i < pass.length; i++) {
            let idx1 = pass.charCodeAt(i);
            let idx2 = pass.charCodeAt(i + 1);
            let idx3 = pass.charCodeAt(i + 2);
            let idx4 = pass.charCodeAt(i + 3);
            let x;
            let myRegex = /(.)\1{2,}/;
            let firstDiffernce = idx2 - idx1;
            let secondDifference = idx3 - idx2;
            let firstSum = idx2 + idx1;
            let secondSum = idx3 + idx2;

            switch (true) {
                case pass.match(myRegex):
                    return seqFound + ` at ${myRegex}` + " case 3"
                    break; 
                default:
                    return noSeqFound
            }
        }
    }
}

console.log(checkPassword("aaaa"))
