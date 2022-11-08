function giveMeNumber() {
  num1 = parseInt(prompt("hay Sir please Enter the first number "));
  const num2 = parseInt(prompt("Please Enter the second number "));
  console.log(num1 / num2);
  alert("your nuber is " + num1 / num2);
  if (num1 % num2) {
    alert("we did't got a whole number never mind try again");
  } else if (num1 / num2) {
    alert("you jusy got a whole nuber good for you !");
  }
}
