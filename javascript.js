
        const allWords = ["programming", "language","programmer","software","computer", "program","machine","code","computer","programming","computing","techie","perl","hardware","fortran","pc","word","processor","cpu","algorithm","program","engineering","source","code","software","development","software","engineering","c","compiler","logic","programming","object"-"oriented","programming","text","editor","programing","executable","minicomputer","microcomputer","motherboard","microprocessor","logic","transmission","focusing","gaming","sysadmin","core","interfaces","videoterminal","rootkit","teleinstruction","computerphone","multitask","cam","digital","computer","digital","communication","application","domain","data","converter","wave","clip","organize","information","access","internet","software","testing","turing","machine","wordprocessing","pictura","examinable","revolutionise","computer","aid","design","internet","cafe","graphic","card","typing","analog","computer","surf","internet","process","information","escape","key","word","process","memory","chip","stream","video","central","process","unit","program","library","subroutine","library"
    ];
    //where i generates random words form the above array
    let num = {
        get randIndex () {
        return Math.floor(Math.random() * allWords.length);
    } 
    }
    let score = 0;
    let time = 10;
    let categoryTime = null;
    let countDownTime = null;
    let startCount = 0;
        const scoreDigit = document.querySelector(".score_digit");
        const timeDigit = document.querySelector(".time_digit");
        const gameStatus = document.querySelector(".game_status");
        const   playButton = document.querySelector(".play_button");
        const   displayWord = document.querySelector(".display_word");
        const okButton = document.querySelector(".ok_button");
        const resetbutton =document.querySelector(".reset");
        const   allButtons = [playButton, okButton, resetbutton];
        const categoryOptions = document.querySelector(".category_options");
        const userInput = document.querySelector(".user_input");
        allButtons.forEach(button => button.addEventListener("click",()=>{
            button.classList.add("play_effect");
            setTimeout(() =>{
                button.classList.remove("play_effect");  
            },300);
        }));
    //fuction that displays different words
        function randWords(){
            displayWord.style.color = "black"
            displayWord.textContent = allWords[num.randIndex];
        }
    
        playButton.addEventListener("click", () =>{
            categoryOptions. disabled = true;
            playButton.disabled = true;
            okButton.disabled = false;
            playButton.style.background = "grey";
            okButton.style.background= "rgb(238, 116, 2)"
            startCount = startCount + 1;
             let myinter = null;
             //changes the conting time for different categories
            switch(categoryOptions.value){
                case "novice" : categoryTime = 150;
                                countDownTime = 2000;break;
                case "amature" : categoryTime = 120;
                                countDownTime = 1500; break;
                case "professional": categoryTime = 80;
                                countDownTime = 1000; break;               
            }
            myinter = setInterval(randWords,categoryTime);
            displayWord.textContent = "";
            setTimeout(() =>{
            clearInterval(myinter);
            },3000);
            setTimeout(() =>{
            displayWord.style.color = "white"
            },3050);
        });
    
        okButton.addEventListener("click", ()=>{
            lastWord = displayWord.textContent;
            playButton.disabled = false;
            okButton.disabled = true;
            playButton.style.background = "rgb(238, 116, 2)";
            okButton.style.background= "grey";
            if(userInput.value == lastWord){
                score = score + 1;
                scoreDigit.textContent = String(score);
                scoreDigit.classList.add("score_effect");
                setTimeout(() =>{
                scoreDigit.classList.remove("score_effect");  
            },1000);
            }else{
                score = score - 1;
                scoreDigit.classList.add("score_effect2");
                scoreDigit.textContent = String(score);
                setTimeout(() =>{
                scoreDigit.classList.remove("score_effect2");  
                },1000);
            }
            userInput.value= "";
        })
        
        userInput.addEventListener("keydown", ()=>{    
            if(startCount == 1){
                startCount = 0;
                let gg = true;
             function countD(){
                let cntDwn = setInterval(()=>{ 
                let fr = Number(timeDigit.textContent);
                timeDigit.textContent = fr - 1 ;
                if (fr < 100){
                    startCount = 0;
                }
                if(fr < 20) {
                    if(gg == true){
                        timeDigit.classList.add("score_effect2");
                        gg = false;
                    }else{
                        timeDigit.classList.remove("score_effect2");
                        gg = true;
                    }
                    if (fr === 1){
                        playButton.disabled = true;
                        okButton.disabled = true;
                        userInput.disabled = true;
                        clearInterval(cntDwn)
                        if (Number(scoreDigit.textContent) >= 8){
                            gameStatus.textContent = "Congrats";
                            gameStatus.classList.add("won");
                        }else{
                            gameStatus.textContent = "Loosed";
                            gameStatus.classList.add("lost");
                        }
                        timeDigit.textContent = "100";
                    }
                }else{
    
                }
                },countDownTime);   
             }
            countD();
            }
        });
        resetbutton.addEventListener("click", ()=>{
            window.location = this.location;
        });