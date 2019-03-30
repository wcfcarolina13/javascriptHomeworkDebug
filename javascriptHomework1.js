// Rock paper scissors

// Computer's choice method

function game(player_count, enemy_count) {
	let enemyArray = ["rock", "paper", "scissors"];
	let game_counter = 0;
	do {
		let choice = prompt("Rock, paper, or scissors?");
		let enemy = enemyArray[Math.floor(Math.random() * enemyArray.length)];
		console.log(`${enemy}`);
		// let document.getElementById('result').innerHTML = enemy;
		game_counter += 1;
		if (choice == "rock") {
			if (enemy == "rock") {
			  console.log("tie");
			} else if (enemy == "paper") {
			  console.log("I win");
			  enemy_count += 1;
			} else if (enemy == "scissors") {
			  console.log("I lose");
			  player_count += 1;
			}
		} else if (choice == "paper") {
			if (enemy == "rock") {
		  		console.log("I lose");
		  		player_count += 1;
		    } else if (enemy == "paper") {
		  		console.log("Tie");
			} else if (enemy == "scissors") {
				console.log("I win");
				enemy_count += 1;
		  	}
		} else if (choice == "scissors") {
			if (enemy == "rock") {      
				console.log("I win");
		  		enemy_count += 1;
		  	} else if (enemy == "paper") {
		  		console.log("I lose");
		  		player_count += 1;
		  	} else if (enemy == "scissors" ) {
		 		console.log("Tie");
		 	}
		} else {
			console.log("incorrect input")
			return;
		}
		console.log(`${game_counter}`);
	} while (player_count <= 5 || enemy_count <= 5);
	console.log(`Player Score: ${player_count}`);
	console.log(`Computer Score: ${enemy_count}`);
	console.log(`Games Played: ${game_counter}`);
	player_count = 0;
	enemy_count = 0;
	return;

}
// game(enemy_count, player_count);