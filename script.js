let input = 'Hello World';

let vowel = ['a', 'e', 'i', 'o', 'u'];

let resultArray =[];

for (x=o; x< input.length; x++){

  for (y=o; y<vowel.length; y++){

    if (input[x] === vowel [y]){

      if (input[x]) === "e" {

        resultArray.push ('ee')

      }else if (input[x] === "u"){

        resultArray.push ('uu')

      }else { resultArray.push (input[x])

      }

    }

  }

}

console.log (resultArray.join('').toUppperCase())
