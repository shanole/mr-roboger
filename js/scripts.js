function mrRoboger(num) {
  let output = []
  for (let i=0; i <= num; i++) {
    const numString = i.toString();
    if (numString.length === 1) {
      for (const digit of numString) {
        if (digit === "1") {
          output.push("Beep");
          break;
        }
        else if (digit === "2") {
          output.push("Boop");
          break;
        }
        else if (digit === "3") {
          output.push("Won't you be my neighbor?");
        }
        else {
          output.push(i);
        }
      }
    }
    else {
      if (numString.includes("1") === true && numString.includes("2") === false && numString.includes("3") === false) {
        output.push("Beep")
      }
      else if (numString.includes("2") === true && numString.includes("3") === false) {
        output.push("Boop")
      }
      else {
        output.push("Won't you be my neighbor?")
      }
    }
  }
  return output;
}

const neighborhood = mrRoboger(23);
console.log(neighborhood);