// This is also dummy code I was playing around with, it does FizzBuzz :). I did it in an interview once so I wanted to crack it

function FizzBuzz(){
    return(
        <div>
            {calculateFizzBuzz(100)}
        </div>
    );
}

function calculateFizzBuzz(total){
    for(let i = 0; i < total; i++){

        let output = '';
        let isNumber = true;

        if( (i % 3) === 0 ){
            output = output + 'fizz';
            isNumber = false;
        }

        if( (i % 5) === 0 ){
            output = output + 'buzz';
            isNumber = false;
        }

        if( isNumber === true ){
            output = i;
        }

        console.log( output );
        output = '';
        isNumber = true;
    }
}

export default FizzBuzz;