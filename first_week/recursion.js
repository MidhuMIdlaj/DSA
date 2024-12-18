function factorial(n){
    if(n==1 || n==0){
        return 1
    }
    return n*factorial(n-1)
}

function fibbanocci(n){
    if(n ===0){
        return 0
    }else if(n === 1){
        return 1
    }
    return fibbanocci(n-1)+fibbanocci(n-2)
}


function palindrome(str,i){
    if(i >= str.length/2){
        return true
    }

    if(str[i] != str[str.length-i-1]){
        return false
    }

    return palindrome(str, i+1)
}

let num = 5
let string = 'malayalan'

console.log(`fibbanocci of number ${num} is ` + fibbanocci(num))
console.log(`factorial of number ${num} is ` + factorial(num))
console.log(palindrome(string, i=0))


function headRecursion(n){
    if(n<=0){
        return 
    }

    headRecursion(n-1)
    console.log(n)
}

// headRecursion(5)

function tailRecursion(n){
    if(n<=0) return
    console.log(n)
    tailRecursion(n-1)
}

// tailRecursion(5)
