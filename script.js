function firstWord(str) {
  // your code here
	 str = str.trim();
    
    // Find the index of the first space
    let spaceIndex = str.indexOf(' ');

    // If there's no space, return the entire string
    if (spaceIndex === -1) {
        return str;
    }

    // Otherwise, return the substring up to the first space
    return str.substring(0, spaceIndex);
}

// Do not change the code below

const str = prompt("Enter String:");
alert(firstWord(str));