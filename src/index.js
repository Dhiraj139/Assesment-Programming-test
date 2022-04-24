//PART - 1 ==Write a function to calculate a score for a candidate’s response for an essay type question based on how closely it matches the correct answer.

//==========================ERRORS IN THE TEST DATA==============================

//in the Question provided to us there was a mistake in counting.
// in correctt answer scoring you give 1 points for the word "celender" instead of 3 points because of 7+ letters word after that full score would be "18"
// in Candidate Response Scoring you give 0 pionts to "14" instead of 4 because it is a letter after that candidates's score would be "10"

console.clear();
function stringChecker(student, correct) {
  // pre-defined Variables
  var fullmarks = 0;
  var studentsmarks = 0;
  // splitting input strings to evaluate from spaces
  var splitedcorrect = correct.split(" ");
  var splitedstudent = student.split(" ");

  // evaluation of correct string
  splitedcorrect.forEach((item) => {
    if (item.length > 0) {
      if (isNaN(item)) {
        if (item.length > 7) {
          fullmarks += 3;
        } else if (item.length < 5) {
          fullmarks += 0;
        } else {
          fullmarks += 1;
        }
      } else {
        fullmarks += 4;
      }
    }
  });
  // evaluation of student's string
  splitedstudent.forEach((item) => {
    if (item.length > 0) {
      if (isNaN(item)) {
        if (item.length > 7) {
          studentsmarks += 3;
        } else if (item.length < 5) {
          studentsmarks += 0;
        } else {
          studentsmarks += 1;
        }
      } else {
        studentsmarks += 4;
      }
    }
  });
  // percentage calculator
  function percentagecalc(obtainValue, totalValue) {
    return ((100 * obtainValue) / totalValue).toFixed(2);
  }

  var percentage = percentagecalc(studentsmarks, fullmarks);

  //returning the percentage value
  return `The Points Scored is ${studentsmarks}, The percentage score is ${percentage}%.`;
}
// Running the function
var studentinput =
  "There are Twenty-Four hours in a day. A year has 14 months.";
var correctinput =
  "There are twenty-four hours in a day, 30 days in a month, and 12 months in the celender year";
var result = stringChecker(studentinput, correctinput);
console.log(result);

// percentage printed in the console

document.querySelector("#resultid").innerHTML = result;
document.querySelector("#correctinput").innerHTML = correctinput;
document.querySelector("#studentinput").innerHTML = studentinput;
