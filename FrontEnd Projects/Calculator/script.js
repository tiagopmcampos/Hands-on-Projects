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
         console.log('number key!');
         calculator.dataset.previousKey = 'number'
      }
      if (
         action === 'add' ||
         action === 'subtract' ||
         action === 'multiply' ||
         action === 'divide'

      ) {
         key.classList.add('is-depressed');
         calculator.dataset.previousKeyType = 'operator;'
         console.log('operator key!');
         calculator.dataset.firstValue = displayedNum;
         calculator.dataset.operator = action;
      }

      if (action === 'decimal') {
         if (!displayedNum.includes('.')){
            display.textContent = displayedNum + '.';
         }
            
         console.log('decimal key!');
      }

      if (action === 'clear') {
         console.log('clear key!')
      }

      if (action === 'calculate') {
         const firstValue = calculator.dataset.firstValue;
         const operator = calculator.dataset.operator;
         const secondValue = displayedNum;
         console.log('calculate key!');

         display.textContent = calculate(firstValue, operator, secondValue);
      }
   }
})

