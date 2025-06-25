const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

// 수식 저장용 변수
let expression = '';

// 버튼 클릭 이벤트 등록
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    // = 버튼 처리
    if (value === '=') {
      try {
        const result = eval(expression);
        display.textContent = result;
        expression = result.toString(); // 결과를 다음 수식으로 이어쓰기
      } catch (e) {
        display.textContent = '오류';
        expression = '';
      }
    }

    // C 버튼 처리 (초기화)
    else if (value === 'C') {
      expression = '';
      display.textContent = '0';
    }

    // ± 버튼 처리 (현재 값 부호 반전)
    else if (value === '±') {
      try {
        const result = eval(expression);
        expression = (-1 * result).toString();
        display.textContent = expression;
      } catch {
        display.textContent = '오류';
        expression = '';
      }
    }

    // % 버튼 처리 (현재 값의 백분율)
    else if (value === '%') {
      try {
        const result = eval(expression);
        expression = (result / 100).toString();
        display.textContent = expression;
      } catch {
        display.textContent = '오류';
        expression = '';
      }
    }

    // 숫자, 소수점, 괄호, 연산자 처리
    else {
      expression += value;
      display.textContent = expression;
    }
  });
});
