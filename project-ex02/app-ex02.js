/**
 * douzone-bipa-math npm모듈 테스트(모듈 패키지: 로컬 배포)
 * 
 * 로컬 패키지 배포
 * $[project-ex02] npm i ../douzone-bipa-math
 * 명령으로 설치 후 테스트
 */

var math = require('douzone-bipa-math');

console.log(math.PI);
console.log(math.max(30, 20, 80, 10));
console.log(math.min(30, 20, 80, 10));