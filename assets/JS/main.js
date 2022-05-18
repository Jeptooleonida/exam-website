// display question
document.getElementsByClassName('quiz')[0];
// define the next function to display question
function next (id){
    document.getElementsByClassName('quiz')[id-1];
    document.getElementsByClassName('quiz')[id];
}
function result() {
    var score = 0;
    if (document.getElementById('correct1').checked) {
        score++;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }
     if (document.getElementById('correct4').checked) {
            score++;
    }
    alert("your score is: "+ score);
}