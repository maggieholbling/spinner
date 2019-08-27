const spinnerParts = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let i = 0; i < spinnerParts.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerParts[i]}   `);
  }, i * 200 + 100);
}