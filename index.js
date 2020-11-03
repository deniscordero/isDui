/*
DUI = 03676881-4
Posiciones -> 9     8     7     6     5     4     3      2
DUI        -> 0     3     6     7     6     8     8      1
DV         =  4
sum:     (9*0) + (8*3) + (7*6) + (6*7) + (5*6) + (4*8) + (3*8) + (2*1)
            0 +     24  +   42  + 42   +   30  +   32  +   24  +   2   = 196
residuo: (196 % 10) = 6
resta:   10 - residuo = 4
IF DV == Resta THEN true ELSE false
*/

const isDUI = dui => {
        if (dui.length == 9) {
        let digits = dui.substr(0, 8);
        console.log(`8 digitos: ${digits}`);
        let dig_ve = dui.substr(8, 1);
        console.log(`Digito vericador: ${dig_ve}`);
                let sum = 0;
                for (let i = 0; i < digits.length; i++) {
            let d = parseInt(digits.charAt(i), 10);
            console.log(`d = ${d}`);
                        sum += (9 - i) * d;
        }
        console.log(`suma: ${sum}`);
        let calc_dig = 10 - (sum % 10);
        let module = sum % 10;
        console.log(`Module: ${module}`)
        console.log(`calc_dig 10 - ${sum % 10} = ${calc_dig}`);

        calc_dig = calc_dig == 10 ? 0 : calc_dig;

        console.log(`dig_ve resultado: ${calc_dig}`);
                return dig_ve == calc_dig;
        } else {
                return false;
        }
}

let dui = '036768814';
console.log(isDUI(dui));
