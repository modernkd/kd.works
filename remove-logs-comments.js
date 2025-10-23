import fs from 'fs';
import path from 'path';

function removeConsoleLogsAndComments(filePath) {
  let code = fs.readFileSync(filePath, 'utf-8');

  // Remove console.log statements only
  code = code.replace(/^\s*console\.log\([^;]*;\s*$/gm, '');

  // Remove single-line comments
  code = code.replace(/^\s*\/\/.*$/gm, '');

  // Remove multi-line comments
  code = code.replace(/\/\*[\s\S]*?\*\//g, '');

  // Remove JSDoc comments
  code = code.replace(/^\s*\/\*\*[\s\S]*?\*\/\s*$/gm, '');

  // Remove TODO comments
  code = code.replace(/^\s*\/\/\s*TODO.*$/gm, '');

  // Clean up extra blank lines
  code = code.replace(/\n\s*\n\s*\n/g, '\n\n');

  fs.writeFileSync(filePath, code);
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let modifiedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      modifiedCount += processDirectory(filePath);
    } else if (/\.(ts|tsx|js|jsx)$/.test(file)) {
      console.log(`Processing ${filePath}`);
      removeConsoleLogsAndComments(filePath);
      modifiedCount++;
    }
  }

  return modifiedCount;
}

const srcDir = './src';
const modifiedFiles = processDirectory(srcDir);
console.log(`Modified ${modifiedFiles} files`);
