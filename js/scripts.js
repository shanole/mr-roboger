function mrRoboger(num) {
  let output = []
  for (let i=0; i <= num; i++) {
    output.push(i);
  }
  return output;
}

const neighborhood = mrRoboger(0);
console.log(neighborhood);