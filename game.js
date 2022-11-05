player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
document.getElementById("span1").innerHTML=player1_score;
document.getElementById("span2").innerHTML=player2_score;
document.getElementById("plq").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("pla").innerHTML = "Answer turn - " + player1_name ;
function send(){

   input1=document.getElementById("word_inp1").value;
   input2=document.getElementById("word_inp2").value;
actual_ans=parseInt(input1)*parseInt(input2)
   
   question_word="<h4>"+input1+"X"+input2+"</h4>"
   inputbox="<br>Answer : <input type='text' id='inp_ans'>";
   btncheck="<br><br> <button class='btn btn-info' onclick='check()'> check </button>";
   row=question_word+inputbox+btncheck;
document.getElementById("output").innerHTML=row;
   document.getElementById("word_inp").value="";
}
question_turn="player1"
ans_turn="player2"
function check(){
    get_ans=document.getElementById("inp_ans").value;
    if (get_ans==actual_ans) {
        if (ans_turn=="player1") {
            player1_score=player1_score+1;
            document.getElementById("span1").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("span2").innerHTML=player2_score;
        }
    }
    if (question_turn=="player1") {
        question_turn="player2"
        document.getElementById("plq").innerHTML="question turn: "+player2_name;
    }
    else{
        question_turn="player1"
        document.getElementById("plq").innerHTML="question turn: "+player1_name;
    }
    if (ans_turn=="player1") {
        ans_turn="player2"
        document.getElementById("pla").innerHTML="answer turn: "+player2_name;
    }
    else{
        ans_turn="player1"
        document.getElementById("pla").innerHTML="answer turn: "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}

    
