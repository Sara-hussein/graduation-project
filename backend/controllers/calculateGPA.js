module.exports = {
    calculateGPA : async (req, res, next) => {
    var hour ;
    var gpa;
    var GPA = 0;
    var TotalHoures =0;
    var RecentGpa =0;
      var score = req.body.score;
      var credit = req.body.credit;
      hour = req.body.hour;
      gpa = req.body.gpa;
      score.forEach((score, index) => {
     var credit1 = parseInt(credit[index]);
     console.log(score, credit1);
     console.log("totalhour",hour)
     console.log("gpa",gpa)
     hour= (typeof hour !== 'undefined') ?  hour : 0
    gpa = (typeof gpa !== 'undefined') ?  gpa : 0 
   RecentGpa+=TotalGPA(score,credit1,hour,gpa)  
   TotalHoures+=credit1+hour; 
   GPA=RecentGpa/TotalHoures 
    }); 
    res.status(200).json({
       GPA : GPA
    
    });  
    //console.log(data.credit)
       console.log("RecentGpa", GPA)
    


  // Convert score to point
function  scoreToPoint(score) {
      let point;
      switch (true) {
          case (score ==='A+'):
              point = 4;
              break;
          case (score==='A'):
              point = 3.7;
              break;
          case (score === 'B+'):
              point = 3;
              break;
          case (score=== 'B'):
              point = 2.7;
              break;
          case (score=== 'C+'):
              point = 2;
              break;
          case (score=== 'C'):
              point = 1.7;
              break;
          case (score=== 'D+'):
              point = 1;
              break;
          case (score=== 'D'):
              point = 0.7;
              break;
          case (score === 'F'):
              point = 0;
          default:
              point = NaN;
      }
      return point;
  }

  function  TotalGPA(score, credit,totalH,AcurrateGpa) {

    credit = parseInt(credit); // Parse string to int
    let point = scoreToPoint(score);
    let gradePoint = point * credit; // string * string = int
    let LastSmester = totalH * AcurrateGpa;///57.6
    return TotalPoints = LastSmester + gradePoint;
}


}
};