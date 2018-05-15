//debugger; This will help you debug your javascript file automatically.
console.dir('document.querySector("calcButtons")');
const calculator = {
	number : 0,
	number2 : 0,
	operation : '',
	inputOutput : document.getElementById('calcInput'),
	// Take value from all inputs and output and set them to blank.
	clear: function() {
		this.inputOutput.value = '';
	//document.location.reload(true)
	},
buttonClicked : function(button) {
  console.log(button.innerHTML);
  console.dir(button);
  let inputBox = this.inputOutput;

  switch (button.target.innerHTML) {
    case 'M':
      break;
    case 'C':
	this.clear();
      break;
    case '/':
      break;
    case 'X':
      break;
    case '-':
      break;
    case '+':
      break;
    case '=':
      break;
    default:
      //if it made it to here it's a number
      inputBox.value = inputBox.value + button.innerHTML;
  }
}
};
const buttonContainer = document.querySelector('.calcButtons');
buttonContainer.addEventListener('touchend',calculator.buttonClicked);