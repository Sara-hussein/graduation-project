module.exports = {

  getAllAnswers: async (req, res, next) => {

    var answers = req.body;

    var CScounter = 0;
    var IScounter = 0;
    var CS=" CS";
    var IS=" IS"
    console.log(answers)
   

    if (answers[0] === true) {
      CScounter++;  //1

      //rl.question("Did you interested in PL1,DS and Algorithms content?", function(answer) {
      if (answers[1] === true) {
        CScounter++;  //2

        //rl.question("Do you interested in problem solving, coding and gaming?", function(answer) {
        if (answers[2] === true) {
          CScounter++; //3

          //rl.question("did you like pl2 project that were done with java programming language? ", function(answer) {
          if (answers[3] === true) {
            CScounter++;  //4

            //rl.question("do you want to kfalsew how the computer translate the code? ", function(answer) {
            if (answers[4] === true) {
              CScounter++;  ///5

            }
            else {
              IScounter++;
            }
          }
          else {
            IScounter++;
            //rl.question("Do you interested in robots and feel excited to kfalsew more about it?", function(answer) {
            if (answers[4] === true) {
              CScounter++;
            }
            else {
              IScounter++;
            }
          }
        }
        else {
          IScounter++;
          //rl.question("Do you interested in data analysis? ", function(answer) {
          if (answers[3] === true) {
            IScounter++;
            //rl.question("Did you interested in IS,DB1 and OR content? ", function(answer) {
            if (answers[4] === true) {
              IScounter++;
            }
            else {
              CScounter++;
            }
          }
          else {
            CScounter++;
            //rl.question("Do you interested in robots and feel excited to kfalsew more about it? ", function(answer) {
            if (answers[4] === true) {
              CScounter++;
            }
            else {
              IScounter++;
            }
          }
        }
      }
      else {
        IScounter++;
        //rl.question("Did you interested in IS,DB1 and OR content? ", function(answer) {
        if (answers[2] === true) {
          IScounter++;
          //rl.question("Do you interested in data analysis? ", function(answer) {
          if (answers[3] === true) {
            IScounter++;
            //rl.question("Do you interseted in typing queries? ", function(answer) {
            if (answers[4] === true) {
              IScounter++;
            }
            else {
              CScounter++;
            }
          }
          else {
            CScounter++;
            //rl.question("did you feel comfort when you were making sw1 project diagrams? ", function(answer) {
            if (answers[4] === true) {
              IScounter++;
            }
            else {
              CScounter++;
            }
          }
        }
        else {
          CScounter++;
          //rl.question("did you like pl2 project that were done with java programming language?  ", function(answer) {
          if (answers[3] === true) {
            CScounter++;
            //rl.question("Do you interested in problem solving, coding and gaming?  ", function(answer) {
            if (answers[4] === true) {
              CScounter++;
            }
            else {
              IScounter++;
            }
          }
          else {
            IScounter++;
            //rl.question("do you want to kfalsew how the computer translate the code?  ", function(answer) {
            if (answers[4] === true) {
              CScounter++;
            }
            else {
              IScounter++;
            }
          }
        }
      }
    }

    //////////////////////ISCounter>CSCounter////////////////////////
    else {
      IScounter++;
      // rl.question("Did you interested in IS,DB1 and OR content?", function(answer) {
      if (answers[1] === true) {
        IScounter++;
        //rl.question("Do you interseted in typing queries?", function(answer) {
        if (answers[2] === true) {
          IScounter++;
          //rl.question("Do you interested in data analysis?", function(answer) {
          if (answers[3] === true) {
            IScounter++;
            //rl.question("do you want to gain more experience in how the systems work?", function(answer) {
            if (answers[4] === true) {
              IScounter++;
            }
            else {
              CScounter++;
            }
          }
          else {
            CScounter++;
            //rl.question("did you feel comfort when you were making sw1 project diagrams?", function (answer) {
            if (answers[4] === true) {
              IScounter++;
            }
            else {
              CScounter++;
            }

          }
     
      }
      else {
        CScounter++;
     //   rl.question("Did you interested in PL1,DS and Algorithms content?", function (answer) {
          if (answers[3] === true) {
            CScounter++;
       //     rl.question("Do you interested in problem solving, coding and gaming?", function (answer) {
              if (answers[4] === true) {
                CScounter++;
              }
              else {
                IScounter++;
              }
           
          }
          else {
            IScounter++;
           // rl.question("do you want to gain more experience in how the systems work?", function (answer) {
              if (answers[4] === true) {
                IScounter++;
              }
              else {
                CScounter++;
              }
            
          }
      

      }
    
  }
                  else {
    CScounter++;
  //rl.question("did you like pl2 project that were done with java programming language?", function (answer) {
    if (answers[2] === true) {
      CScounter++;
    //  rl.question("do you want to kfalsew how the computer translate the code?", function (answer) {
        if (answers[3] === true) {
          CScounter++;
      //    rl.question("Do you interested in robots and feel excited to kfalsew more about it?", function (answer) {
            if (answers[4] === true) {
              CScounter++;
            }
            else {
              IScounter++;
            }
          
        }
        else {
          IScounter++;
          //rl.question("do you want to gain more experience in how the systems work?", function (answer) {
            if (answers[4] === true) {
              IScounter++;
            }
            else {
              CScounter++;
            }
          

        }
      
    }
    else {
      IScounter++;
      //rl.question("Do you interseted in typing queries?", function (answer) {
        if (answers[3] === true) {
          IScounter++;
        //  rl.question("did you feel comfort when you were making sw1 project diagrams?", function (answer) {
            if (answers[4] === true) {
              IScounter++;
            }
            else {
              CScounter++;
            }
           

        }
        else {
          CScounter++;
          //rl.question("Do you interested in data analysis?", function (answer) {
            if (answers[4] === true) {
              IScounter++;
            }
            else {
              CScounter++;
            }
         


        }
    }

}
      
              } 
        


      

        


  console.log("cs",CScounter);
  console.log("is",IScounter);
  if (CScounter > IScounter) {
    console.log("CS department")
  }
  else {
    console.log("IS department")
  }
  


  if (CScounter > IScounter) {

    res.status(200).json({
      DEPARTMENT : CS
   
   }); 

  }
  else{
    res.status(200).json({
      DEPARTMENT : IS
   
   }); 
  }
}



};