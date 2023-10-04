/*
{
    question: "",
    answers: ["","","",""],
    correctAnswer:"" ,
}
*/



const questions=[{
    question: "?מי מבין הבאים הינו היונק הגדול בעולם",
    answers: ["פיל","סוס","לוויתן כחול", "היפופוטם"],
    correctAnswer: "לוויתן כחול",
},
{
    question: "?איזו מדינה הציעו להרצל כתחליף לישראל",
    answers: ["סנגל","ג'מייקה","מולדובה","אוגנדה"],
    correctAnswer:"אוגנדה" ,
},
{
    question: "?מה פירוש המילה בלאנקו בספרדית",
    answers: ["שלום","לבן","קיץ","בית"],
    correctAnswer:"לבן" ,
},
{
    question: "?איזה צבע אינו מופיע בדגל איטליה",
    answers: ["אדום","כחול","צהוב","לבן"],
    correctAnswer:"צהוב" ,
},
{
    question: "?מי כתב את שר הטבעות",
    answers: ["אייזיק אסימוב","ג'.ר.ר.טולקין","ג'יי קיי רולינג","דיווייד בניוף"],
    correctAnswer:"ג'.ר.ר.טולקין" ,
},
{
    question: "?כמה הם 20% מתוך 50",
    answers: ["20","15","10","5"],
    correctAnswer:"10" ,
},
{
    question: "?'עם איזו קבוצה מזוהה מיקי ברקוביץ",
    answers: ["הפועל גליל עליון","הפועל ירושלים","הפועל תל אביב","מכבי תל אביב"],
    correctAnswer:"מכבי תל אביב" ,
},
{
    question: "?לאיזו צורה יש רדיוס",
    answers: ["מרובע","משולש","עיגול","מלבן"],
    correctAnswer:"עיגול" ,
},
{
    question: "?מי הוא סולן להקת QUEEN",
    answers: ["פרדי מרקורי","רוג'ר טיילור","ניל פירט","ברייאן מאי"],
    correctAnswer:"פרדי מרקורי" ,
},
{
    question: "?מי היו בניו של נח",
    answers: ["שם, חם ויפת","אחאב, מואב, ודוד","אברהם, יצחק ויעקב","זכריה, עבדיה וחזקיהו"],
    correctAnswer:"שם, חם ויפת" ,
},
{
    question: "?איזו נבחרת מחזיקה בהכי הרבה זכיות במונדיאל",
    answers: ["גרמניה","איטליה","ארגנטינה","ברזיל"],
    correctAnswer:"ברזיל" ,
},
{
    question: "?'איזה ירק משליכים בפסטיבל הספרדי 'לה טומטינה",
    answers: ["גזר","דלעת","עגבנייה","חציל"],
    correctAnswer:"עגבנייה" ,
},
{
    question: "?לאיזו מדינה טסים כדי לבקר בקבר הרבי נחמן",
    answers: ["שווייץ","אוקראינה","מולדובה","לוב"],
    correctAnswer:"אוקראינה" ,
},
{
    question: "?לאיזו מדינה יש יותר שטח",
    answers: ["סין","ברזיל","רוסיה","הודו"],
    correctAnswer:"רוסיה" ,
},
{
    question: "?מי קבוצת הכדורגל לה יש הכי הרבה זכיות בליגת אלופות",
    answers: ["ריאל מדריד","יובנטוס","ברצלונה","מילאן"],
    correctAnswer:"ריאל מדריד" ,
}
];

let questionsOrder;
let answersOrder;


// Adding Bonus number1 
// shuffle the questions order

function questionsShuffle(){
    let orderQuestionArr=[];
for(let i=0;i<questions.length;i++){
    let counter=0;
    let randQuestionNum= Math.trunc(Math.random()*questions.length);
    for (j=0;j<orderQuestionArr.length;j++){
        if (orderQuestionArr[j]==randQuestionNum){
            counter++
        }             
    }
    if(counter>0){
        i--;
        counter=0;
    }
    else{
        orderQuestionArr.push(randQuestionNum)
    }     
        console.log(randQuestionNum);
            console.log(orderQuestionArr);
}
return orderQuestionArr;
}

// Shuffle the answers order

// for(i=0;questions[counter].answers[length];i++){}
function answerShuffle(){
    // numOfAnswers = 4
const numOfAnswers = questions[0].answers.length;
let answerArray=[];
    for(i=0;i<numOfAnswers;i++){
        let counter2=0;
        let rand = Math.trunc(Math.random()*numOfAnswers);
        for(j=0;j<answerArray.length;j++){
        if(answerArray[j]==rand){
            counter2++;
        }
    }
    if (counter2>0){
        i--;
        counter2=0;
    }
     else{answerArray.push(rand); 
    }
    console.log(answerArray);
}
return answerArray;
}

function startPlay(){
    questionsOrder=questionsShuffle();
    answersOrder = answerShuffle();
    console.log(questionsOrder);
    console.log(answersOrder);
    changeTheOptions(0,0);

}



// QUESTION COUNTER + UPDATED SCORE Function
let counter=0;
let score=0;

function changeTheOptions(counter,score){
    // updating the question number and the score
const questionNumber=document.querySelector("#questionPosition");
const scoringResult=document.querySelector("#scoringLive");

questionNumber.innerHTML=counter;
scoringResult.innerHTML=score;

if (counter==questions.length){
    let gameFinished="Game Finished";
    let message=document.querySelector('#container');
    message.classList.add("messageToUser");
    // container.style.color=red;
    message.innerHTML=`${gameFinished}, you succed to score ${score} points!, try again! :)`
    return;
}


let question=document.querySelector("#questionTitle");
question.innerHTML=questions[questionsOrder[counter]].question



// questions Order

// option1
let option1=document.querySelector("#optionNumber1");
option1.innerHTML=questions[questionsOrder[counter]].answers[answersOrder[0]];
// option2
let option2=document.querySelector("#optionNumber2");
option2.innerHTML=questions[questionsOrder[counter]].answers[answersOrder[1]];
// option3
let option3=document.querySelector("#optionNumber3");
option3.innerHTML=questions[questionsOrder[counter]].answers[answersOrder[2]];
// option4
let option4=document.querySelector("#optionNumber4");
option4.innerHTML=questions[questionsOrder[counter]].answers[answersOrder[3]];
}

// End of function



// function of Chek the correct answer

function checkAnswer(button){
const chosenAnswer=document.querySelector(`#optionNumber${button}`).innerHTML;
// console.log(chosenAnswer);
const rightAnswer=questions[questionsOrder[counter]].correctAnswer
// console.log(rightAnswer);
if (chosenAnswer==rightAnswer){
    score+=10;
}
counter++;
changeTheOptions(counter,score);
}

// End of function




