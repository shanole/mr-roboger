function mrRoboger(num) {
  let output = []
  for (let i=0; i <= num; i++) {
    const numString = i.toString();
    for (const digit of numString) {
      if (digit === "1") {
        output.push("Beep");
      }
      else if (digit === "2") {
        output.push("Boop");
      }
      else if (digit === "3") {
        output.push("Won't you be my neighbor?");
      }
      else {
        output.push(i);
      }
    }
  }
  return output;
}

const neighborhood = mrRoboger(4);
console.log(neighborhood);