const umbrella = {
    color: "pink",  // Property: Represents the color of the umbrella, set to "pink".
    isOpen: false,  // Property: Represents whether the umbrella is open or closed, initially set to false.
  
    open: function() {  // Method: Defines a function called 'open' within the umbrella object.
      if (umbrella.isOpen === true) {  // Checks if the umbrella is already open.
        return "The umbrella is already opened!";  // If it's already open, returns a message indicating it.
      } else {
        umbrella.isOpen = true;  // If the umbrella is closed, sets 'isOpen' property to true (opens the umbrella).
        return "Julia opens the umbrella!";  // Returns a message indicating that Julia has opened the umbrella.
      }
    }
  }
  