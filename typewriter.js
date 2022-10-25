const sentence = "hello there from lighthouse labs";

let delay = 0;
const strLength = sentence.length;
const increment = 250;

setTimeout(() => {
  console.log();
}, strLength * increment);

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += increment;
}

