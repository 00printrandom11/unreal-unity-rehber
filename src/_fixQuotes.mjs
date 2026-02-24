import{readFileSync,writeFileSync} from 'fs';
let c=readFileSync('src/_genU1.mjs','utf-8');

// Replace all '' (double single quotes) that appear in content strings
// But NOT in the esc function or in regex patterns
// Strategy: replace all '' with \' globally, then fix the esc function line
c = c.replace(/''/g, "\\'");

// Fix the esc function line which uses "\\'" in a double-quoted string - restore it
// The esc function is: replace(/'/g,"\\'")  
// After our replace it became: replace(/\'/g,"\\\'") which is wrong
// Let's restore line 4
let lines = c.split('\n');
lines[3] = `function esc(s){return s.replace(/\\\\/g,'\\\\\\\\').replace(/'/g,"\\\\'").replace(/\\n/g,'\\\\n').replace(/\\r/g,'');}`;

c = lines.join('\n');
writeFileSync('src/_genU1.mjs',c,'utf-8');
console.log('Fixed all quotes');
