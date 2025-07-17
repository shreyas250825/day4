function checkSign(num: number): void {
  if (num > 0) console.log("Positive");
}

function evenOrOdd(num: number): void {
  if (num % 2 === 0) console.log("Even");
  else console.log("Odd");
}

function getGrade(score: number): string {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

function provideFeedback(grade: string): void {
  switch (grade) {
    case "A": console.log("Excellent!"); break;
    case "B": console.log("Great job!"); break;
    case "C": console.log("Good effort!"); break;
    case "D": console.log("Needs improvement."); break;
    case "F": console.log("Try harder next time."); break;
    default: console.log("Unknown grade.");
  }
}

// 🔽 Calling the functions to produce output
checkSign(10);               // Output: Positive
evenOrOdd(7);                // Output: Odd
const grade = getGrade(85);  // Returns: "B"
provideFeedback(grade);      // Output: Great job!
