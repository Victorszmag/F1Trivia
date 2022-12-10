const questions = [
	{
		question: "Who won the 2021 Drivers Championship?",
		optionA: "Max Verstappen",
		optionB: "Lewis Hamilton",
		optionC: "Sebatian Vettel",
		optionD: "Jenson Button",
		correctOption: "optionA"
	},
  
	{
		question: "Jenson Button won the 2009 Formula One World Championship driving for which team?",
		optionA: "Brawn",
		optionB: "Mercedes",
		optionC: "Red Bull",
		optionD: "BMW",
		correctOption: "optionA"
	},
  
	{
		question: "Sebastian Vettel won the championship in 2010, 2011, 2012 and 2013, with which racing team?",
		optionA: "Red Bull",
		optionB: "Mercedes",
		optionC: "Racing Point",
		optionD: "Mclaren",
		correctOption: "optionA"
	},
  
	{
		question: "In 2016, who became F1 World Champion and then announced his retirement from the sport five days later?",
		optionA: "Sebastian Vettel",
		optionB: "Kimi Räikkönen",
		optionC: "Nico Rosberg",
		optionD: "Michael Schumacher",
		correctOption: "optionC"
	},
  
	{
		question: "The Marina Bay Street Circuit is the street circuit for which country's Grand Prix?",
		optionA: "UAE",
		optionB: "Azerbaijan",
		optionC: "Australia",
		optionD: "Singapore",
		correctOption: "optionD"
	},
  
	{
		question: "Which driver, who won three F1 world championships for McLaren, died in an accident while leading the 1994 San Marino Grand Prix?",
		optionA: "Alain Prost",
		optionB: "Juan Fangio",
		optionC: "Ayrton Senna",
		optionD: "Michael Schumacher",
		correctOption: "optionC"
	},
  
	{
		question: "The Iceman is the nickname given to which Finnish Formula 1 World Champion?",
		optionA: "Michael Schumacher ",
		optionB: "Ayrton Senna",
		optionC: "Kimi Räikkönen",
		optionD: "Max Verstappen",
		correctOption: "optionC"
	},
  
	{
		question: "What is the name of the youngest F1 driver to win a race?",
		optionA: "Max Verstappen",
		optionB: "Alain Prost",
		optionC: "Lando Norris",
		optionD: "Lewis Hamilton",
		correctOption: "optionA"
	},
  
	{
		question: "Which team was Lewis Hamilton driving for when he won his first F1 World Championship title?",
		optionA: "RedBull",
		optionB: "Brawn",
		optionC: "Mercedes",
		optionD: "Mclaren",
		correctOption: "optionD"
	},
  
	{
		question: "Team Haas competes in the F1 for which country?",
		optionA: "Germany",
		optionB: "France",
		optionC: "England",
		optionD: "USA",
		correctOption: "optionD"
	},
  
	{
		question: "At the 2005 United States Grand Prix, how many cars lined up on the grid?",
		optionA: "Ten",
		optionB: "Fourty",
		optionC: "Six",
		optionD: "Twenty",
		correctOption: "optionC"
	},
  
	{
		question: "In the 1976 season Niki Lauda survived a near fatal crash. At which track did this occur?",
		optionA: "Nurburgring",
		optionB: "Spa-Francorchamps",
		optionC: "Monaco",
		optionD: "Cesears Palace Parking Lot",
		correctOption: "optionA"
	},
  
  
	{
		question: "What track was used for the last race this year?",
		optionA: "RedBull Ring",
		optionB: "Yas Marina",
		optionC: "Monaco",
		optionD: "Zandvoort",
		correctOption: "optionB"
	},
  
	{
		question: "Who won Second place this year?",
		optionA: "Lando Norris",
		optionB: "Lewis Hamilton",
		optionC: "Max Verstappen",
		optionD: "Charles Leclerc",
		correctOption: "optionD"
	},
  
	{
		question: "Which driver from Mclaren will be replaced next year?",
		optionA: "Lando Norris",
		optionB: "Daniel Ricciardo",
		optionC: "Max Verstappen",
		optionD: "Charles Leclerc",
		correctOption: "optionB"
	},
  
	{
		question: "Who won the Race in Monza in 2021?",
		optionA: "Lando Norris",
		optionB: "Max Verstappen",
		optionC: "Daniel Ricciardo",
		optionD: "Charles Leclerc",
		correctOption: "optionC"
	},
  
	{
		question: "Which driver holds the longest streak of consecutive wins?",
		optionA: "Daniel Ricciardo",
		optionB: "Charles Leclerc",
		optionC: "Sebastian Vettel",
		optionD: "Lando Norris",
		correctOption: "optionC"
	},
  
	{
		question: "Who holds the title for most F1 Grand Prix races won?",
		optionA: "Sebastian Vettel",
		optionB: "Lando Norris",
		optionC: "Lewis Hamilton",
		optionD: "Max Verstappen",
		correctOption: "optionC"
	},
  
	{
		question: "Which racing team has the nickname The Prancing Horse?",
		optionA: "Brawn",
		optionB: "Mclaren",
		optionC: "Mercedes",
		optionD: "Ferrari",
		correctOption: "optionD"
	},
  
	{
		question: "What was the previous name of Alpha Tauri?",
		optionA: "Toro Rosso",
		optionB: "Brawn",
		optionC: "Red Bull",
		optionD: "Mercedes",
		correctOption: "optionA"
	},
  
	{
		question: "What circuit did Pierre Gasly get his first win?",
		optionA: "Mexico",
		optionB: "Austin",
		optionC: "Ceasers",
		optionD: "Monza",
		correctOption: "optionD"
	},
  
	{
		question: "Who is Redbulls Team Principal?",
		optionA: "Toto Wolff",
		optionB: "Christian Horner",
		optionC: "Mattia Binotto",
		optionD: "Otmar Szafnauer",
		correctOption: "optionB"
	},
  
	{
		question: "How many gears are there in a F1 car?",
		optionA: "1",
		optionB: "8",
		optionC: "2",
		optionD: "6",
		correctOption: "optionB"
	},
  
	{
		question: "What team did Fernando Alonso win his first two championships?",
		optionA: "Mercedes",
		optionB: "Red Bull",
		optionC: "Renault",
		optionD: "Mclaren",
		correctOption: "optionC"
	},
  
	{
		question: "Which driver drove for Hass in their first 5 seasons?",
		optionA: "Lando Norris",
		optionB: "Fernando Alonso",
		optionC: "Roman Grosjean",
		optionD: "Lewis Hamilton",
		correctOption: "optionC"
	}
  
  ]
  
  
  let shuffleQuestions = [] //empty array for questions that were shuffled
  
  function handleQuestions() { 
	//function to take 10 questions and put them in the array we are counting 0 so we only go up to 9
	//while looop function that takes a random number between 0-1 multiplies by the length and then returns greatest integer and spits out the question
  
	while (shuffleQuestions.length <= 9) {
		const random = questions[Math.floor(Math.random() * questions.length)]
		if (!shuffleQuestions.includes(random)) {
			shuffleQuestions.push(random)
		}
	}
  }
  
  
  let questionNumber = 1 //holds the current number
  let playerScore = 0  //holds the player points
  let wrongAttempt = 0 //amount of wrong answers
  let indexNumber = 0 //will show how many questions
  
  //displays the game info to dom
  function NextQuestion(index) {
	handleQuestions()
	const currentQuestion = shuffleQuestions[index]
	document.getElementById("question-number").innerHTML = questionNumber
	document.getElementById("player-score").innerHTML = playerScore
	document.getElementById("display-question").innerHTML = currentQuestion.question;
	document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
	document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
	document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
	document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
  
  }
  
  
  function checkForAnswer() {
	const currentQuestion = shuffleQuestions[indexNumber] //gets current Question 
	const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
	const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
	
  
	options.forEach((option) => {
		if (option.value === currentQuestionAnswer) {
			//get's correct's radio input/button answer with correct answer
			correctOption = option.labels[0].id
		}
	})
  
	//checking to make sure a radio input/ button answer has been checked because if it was not then the modal will pop open
	if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
		document.getElementById('option-modal').style.display = "flex"
	}
  
	//checking if checked radio button/ button answer is same as answer
	options.forEach((option) => {
		if (option.checked === true && option.value === currentQuestionAnswer) {
			document.getElementById(correctOption).style.backgroundColor = "green"
			playerScore++ //adding to player's points
			indexNumber++ //adding 1 to index so has to display next question..
			//time delay till when next question loads so you can see the correct answer as green outline
			setTimeout(() => {
				questionNumber++
			}, 2000)
		}
  
		else if (option.checked && option.value !== currentQuestionAnswer) {
			const wrongLabelId = option.labels[0].id
			document.getElementById(wrongLabelId).style.backgroundColor = "red"
			document.getElementById(correctOption).style.backgroundColor = "green"
			wrongAttempt++ //adds 1 to wrong attempts/guesses
			indexNumber++
			//time delay till when the next question loads this time it shows/outlines the wrong answer you choose and the right one
			setTimeout(() => {
				questionNumber++
			}, 2000)
		}
	})
  }
  
  
  
  //called when the next button is used
  function handleNextQuestion() {
	checkForAnswer() // answer check if player picked right or wrong answer
	unCheckRadioButtons()
	//time delay so it doesnt jumpa around
	setTimeout(() => {
		if (indexNumber <= 9) {
  //shows the next question in line as long as its below 9 since we counted 0
			NextQuestion(indexNumber)
		}
		else {
			handleEndGame()//when we are above 9 it ends the game
		}
		resetOptionBackground()
	}, 2000);//two second delay for smoother loading
  }
  
  //reset the background colors of the correct and incorrect
  function resetOptionBackground() {
	const options = document.getElementsByName("option");
	options.forEach((option) => {
		document.getElementById(option.labels[0].id).style.backgroundColor = ""
	})
  }
  
  // reseting the buttons for the next question
  function unCheckRadioButtons() {
	const options = document.getElementsByName("option");
	for (let i = 0; i < options.length; i++) {
		options[i].checked = false;
	}
  }
  
  // function for end game
  function handleEndGame() {
	let remark = null
	let remarkColor = null
  
	// checking the points to see where you ended up
	if (playerScore <= 4) {
		remark = "You ended up in last booo!"
		
	}
	else if (playerScore >= 5 && playerScore < 7) {
		remark = "You aint first but you aint last!"
		
	}
	else if (playerScore >= 8) {
		remark = "You are World Champion of the World!"
		remarkColor = "gold"
	}
	const playerGrade = (playerScore / 10) * 100
  
	//data to display to score board modual
	document.getElementById('remarks').innerHTML = remark
	document.getElementById('remarks').style.color = remarkColor
	document.getElementById('grade-percentage').innerHTML = playerGrade
	document.getElementById('wrong-answers').innerHTML = wrongAttempt
	document.getElementById('right-answers').innerHTML = playerScore
	document.getElementById('score-modal').style.display = "flex"
  
  }
  
  //close the scores, resets, and starts
  function closeScoreModal() {
	questionNumber = 1
	playerScore = 0
	wrongAttempt = 0
	indexNumber = 0
	shuffleQuestions = []
	NextQuestion(indexNumber)
	document.getElementById('score-modal').style.display = "none"
  }
  
  //close warning modal that you didnt choose an answer
  function closeOptionModal() {
	document.getElementById('option-modal').style.display = "none"
  }