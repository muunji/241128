import fs from 'fs';

import add from './utils/add';

class kong {}

let work = new kong;

type minseock = string;

let minseock : minseock = "서";

function minji(name:minseock) : string {
// void : return이 없는 실행 함수
 return name;
}

// minji(minseock);
let output : string = minji(minseock) + add(1,2);

fs.writeFileSync("./dist/text.txt",output,"utf-8");

console.log(output);