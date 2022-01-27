player_1_name = localStorage.getItem("Player 1's username:");
player_2_name = localStorage.getItem("Player 2's username:");

player_1_score = 0; 
player_2_score = 0; 


document.getElementById("player_1").innerHTML = player_1_name+": ";
document.getElementById("player_2").innerHTML = player_2_name+": ";

document.getElementById("score_player1").innerHTML = player_1_score;
document.getElementById("score_player2").innerHTML = player_2_score; 

document.getElementById("question_turn").innerHTML = "Question Turn: "+player_1_name; 
document.getElementById("answer_turn").innerHTML = "Answer Turn: "+player_2_name;

function send() {
    num1 = document.getElementById("num1_enter").value;
    num2 = document.getElementById("num2_enter").value;
    answer = parseInt(num1)*parseInt(num2);

    question = "<h4>"+num1+" X "+num2+"</h4>";
    input = "<br><br>Answer: <input type='text' id='answer_input'>";
    button = "<br><br><button id='check_button' class='btn btn-info' onclick='check()'>Check</button>";

    div_elements = question+input+button; 

    document.getElementById("output").innerHTML = div_elements;

    document.getElementById("num1_enter").value = "";
    document.getElementById("num2_enter").value = "";
}

question_turn = "player1";
answer_turn = "player2"; 

function check() {
    input_val = document.getElementById("answer_input").value; 

    if(input_val == answer) {
        if(question_turn == "player1") {
            question_turn = "player2";
            document.getElementById("question_turn").innerHTML = "Question Turn: "+player_2_name;
        } else { 
            question_turn = "player1"
            document.getElementById("question_turn").innerHTML = "Question Turn: "+player_1_name;
        }

        if(answer_turn == "player1") {
            player_1_score = player_1_score + 1; 
            document.getElementById("score_player1").innerHTML = player_1_score;
        } else {
            player_2_score = player_2_score + 1; 
            document.getElementById("score_player2").innerHTML = player_2_score;
        }
    }
}