const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display')

const calculate = (n1, operator, n2) =>{
   let result = '';

   if (operator === 'add'){
      result = parseFloat(n1) + parseFloat(n2);
   }
   if (operator === 'subtract'){
      result = parseFloat(n1) - parseFloat(n2);
   }
   if (operator === 'multiply'){
      result = parseFloat(n1) * parseFloat(n2);
   }
   if (operator === 'divide'){
      result = parseFloat(n1) / parseFloat(n2);
   }

   return result;
}

keys.addEventListener('click', e => {
   if (e.target.matches('button')) {
      const key = e.target;
      const action = key.dataset.action;
      const keyContent = key.textContent;
      const displayedNum = display.textContent;
      const previousKeyType = calculator.dataset.previousKeyType
      // Remove a class .is-depressed  de todas as teclas 
      Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))

      if (!action) {
         if (displayedNum === 0 || previousKeyType === 'operator') {
            display.textContent = key.textContent;
         } else {
            display.textContent = displayedNum + keyContent;
         }
         calculator.dataset.previousKey = 'number'
      }

      if (
         action === 'add' ||
         action === 'subtract' ||
         action === 'multiply' ||
         action === 'divide'

      ) {
         const firstValue = calculator.dataset.firstValue;
         const operator = calculator.dataset.operator;
         const secondValue = displayedNum;

         if (firstValue && operator && previousKeyType !== 'operator') {
            display.textContent = calculate(firstValue, operator, secondValue)
         }
         
         key.classList.add('is-depressed');
         calculator.dataset.firstValue = displayedNum;
         calculator.dataset.operator = action;
         calculator.dataset.previousKeyType = 'operator';
      }

      // Não faça nada se a STRING tem um ponto
      if (action === 'decimal') {
         if (!displayedNum.includes('.')){
            display.textContent = displayedNum + '.';
         } else if (previousKeyType === 'operator'){
            display.textContent = '0.'
         }
         calculator.dataset.previousKeyType = 'decimal';
      }
      
      if (action === 'clear') {
         calculator.dataset.previousKeyType = 'clear';
      }
      
      if (action === 'calculate') {
         const firstValue = calculator.dataset.firstValue;
         const operator = calculator.dataset.operator;
         const secondValue = displayedNum;
         display.textContent = calculate(firstValue, operator, secondValue);

         calculator.dataset.previousKeyType = 'calculate';
      }
   }
})

