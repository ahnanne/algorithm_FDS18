# 210305 Homework

## 스크린샷
![image](https://user-images.githubusercontent.com/54733637/110232883-e2e3c580-7f63-11eb-90df-5071602ce4de.png)

## 문제 및 코드
- 문제1.

  - num이 홀수일 경우 'Odd'를, 짝수일 경우 'Even'을 반환하기

  - 소스코드

      ```js
      function solution(num) {
          return num % 2 ? 'Odd' : 'Even';
      }
      ```

- 문제2.

  - 2016년 a월 b일의 요일 반환하기

  - 소스코드

      ```js
      function solution(a, b) {
        const day = new Date(2016, a - 1, b).getDay();

        switch (day) {
          case 0:
            return 'SUN';
          case 1:
            return 'MON';
          case 2:
            return 'TUE';
          case 3:
            return 'WED';
          case 4:
            return 'THU';
          case 5:
            return 'FRI';
          case 6:
            return 'SAT';
          default:
            return '';
        }
      }
      ```
