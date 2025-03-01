

 
let input=document.getElementById('input');

let button=document.getElementById('check');
let result=document.getElementById('result');


function isPalidrom()
{ let text=input.value.replace(/\s+/g,'');
    
    newText=String(text);
        let newStr=newText.split().join().toLowerCase();
let another= newText.split('').reverse().join('').toLowerCase();
console.log(another)
console.log(newStr)
if(text==''){
  alert('Please Input a value')
  console.log('hello')
  alert(text)}


  else if(newStr==another){
    alert(`${text} is palindrome`)
  }
  else{
    alert(`${text} is not palindrome`)
  }
}
