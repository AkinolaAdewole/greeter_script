function whereAmIAssessible(a) {
    if (a) {
      var x = "x is accessible";
      let y = 'y is accessible';
      const z = 'z is accessible';
      console.log("Inside the if block scope:");
      console.log(x);
      console.log(y);
      console.log(z);
    }
  }
  
  whereAmIAssessible(true);
  console.log("Outside the function scope:")
  console.log(x);
  console.log(y);
  console.log(z);