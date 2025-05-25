const args = process.argv.slice(2); // Skip 'node' and script name
const numArgs = args.length;

if (numArgs === 0) {
  console.log("No arguments were passed.");
} else if (numArgs === 1) {
  console.log("One argument was passed:", args[0]);
} else {
  console.log(`${numArgs} arguments were passed:`, args);
}