"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const add_1 = __importDefault(require("./utils/add"));
let minseock = "서";
function minji(name) {
    // void : return이 없는 실행 함수
    return name;
}
// minji(minseock);
let output = minji(minseock) + (0, add_1.default)(1, 2);
fs_1.default.writeFileSync("./dist/text.txt", output, "utf-8");
console.log(output);
