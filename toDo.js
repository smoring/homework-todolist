var prompt = require("prompt")

var toDoList = []

prompt.start();

function runToDoPrompt() {
	console.log("Please choose your mode: Print, Add, or Complete")

	prompt.get(['mode'], function(err, result) {
		console.log(result.mode);

		if (result.mode === 'Print') {
			console.log(toDoList)
			runToDoPrompt()
		} else if (result.mode === 'Add') {
			prompt.get(['addition'], function(err, result){
				toDoList.push(result.addition)
				console.log("List item successfully added")
				runToDoPrompt()
			})
		} else if (result.mode === 'Complete') {
			console.log(toDoList)
			console.log("Which item index number did you complete?")
			prompt.get(['completion'], function(err, result){
				toDoList.splice(+result.completion, 1)
				console.log("Successfully completed")
				runToDoPrompt()
			})
		} else console.log(result.mode + " is not a valid mode")
	});
}

runToDoPrompt()