---

## JavaScript Mastery

---

## Babel 사용법

1. 프로젝트 루트에서 npm 초기화(yarn으로 초기화해도 될 듯)
2. 명령어
   ```shell
   npm install --save-dev @babel/core @babel/cli @bable/preset-env
   ```
3. package.json 빌드 설정
   ```json
   {
      "scripts": {
        "build": "babel index.js -w -o build/index.js"
      }
   }
   ```
   - `-w` : 변경될 때마다 감시하여 다시 빌드
   - `-o 경로` : 빌드 결과물 저장 경로
4. `babel.config.json` : 버전정보 설정 등을 이곳에서 지정
5. `npm run build`

---
