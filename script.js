let countNum = document.getElementById("count-num")     
let counter = 0  
let sum = 0                                         
let totalNum = document.getElementById("total-num")     

function increment() {                                  
    counter += 1
    countNum.textContent = counter
} 

function decrement() {                                  
    counter -= 1
    countNum.textContent = counter
}

function total() {                                      
    sum += counter
    totalNum.textContent = sum
    countNum.textContent = 0
    counter = 0
}

function reset() {
    countNum.textContent = 0
    totalNum.textContent = 0
    counter = 0
    sum = 0
}