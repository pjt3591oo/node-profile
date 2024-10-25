console.profile();

let a = 0;
let temp0 = [];
let temp1 = [];
let temp2 = [];

function testcall0(i, time = Date.now()) {
  a += Math.random() * Math.random();
  
  while (Date.now() - time < 2000) {
    i++;
    if (i % 10_000_000 === 0) {
      temp0.push({
        i,
        a: Math.random() * Math.random(),
        b: Math.random() * Math.random(),
        c: Math.random() * Math.random(),
        d: Math.random() * Math.random(),
        e: Math.random() * Math.random(),
      });
      temp1.push({
        i,
        a: Math.random() * Math.random(),
        b: Math.random() * Math.random(),
        c: Math.random() * Math.random(),
        d: Math.random() * Math.random(),
        e: Math.random() * Math.random(),
      });
      temp2.push({
        i,
        a: Math.random() * Math.random(),
        b: Math.random() * Math.random(),
        c: Math.random() * Math.random(),
        d: Math.random() * Math.random(),
        e: Math.random() * Math.random(),
      });
    }
  }
}
function testcall1(i, time = Date.now()) {
  a += Math.random() * Math.random();

  while (Date.now() - time < 3000) {
    i++;
    if (i % 10_000_000 === 0) {
      temp0.push({
        i,
        a: Math.random() * Math.random(),
        b: Math.random() * Math.random(),
        c: Math.random() * Math.random(),
        d: Math.random() * Math.random(),
        e: Math.random() * Math.random(),
      });
      temp1.push({
        i,
        a: Math.random() * Math.random(),
        b: Math.random() * Math.random(),
        c: Math.random() * Math.random(),
        d: Math.random() * Math.random(),
        e: Math.random() * Math.random(),
      });
      temp2.push({
        i,
        a: Math.random() * Math.random(),
        b: Math.random() * Math.random(),
        c: Math.random() * Math.random(),
        d: Math.random() * Math.random(),
        e: Math.random() * Math.random(),
      });
    }
  }
}

function main() {
  for(let i = 0 ; i < 2 ; i++) {
    testcall1(i);
    testcall0(i);
  }
  debugger;
  console.log(temp0.length);
  console.log(temp1.length);
  console.log(temp2.length);
}

main();

console.profileEnd();