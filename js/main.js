const mainEl = document.querySelector('#main')
const mainNextEl = document.querySelector('#mainNext')
const mainSecondEl = document.querySelector('#mainSecond')
const gamingEl = document.querySelector('#gaming')
const answerForm = document.querySelector('.answerForm')
const answerBox = document.querySelector('.answerBox')
const setGrade = document.querySelector('.grade')
const answerBtn = document.querySelector('#answerBtn')
const gamingBoxEl = document.querySelector('.gamingBoxInner')
const resultEl = document.querySelector('#result')
const showResultEl = document.querySelector('#showResult')
const lv2El = document.querySelector('#lv-2')
const lv5El = document.querySelector('#lv-5')
const answerContainerEl = document.querySelector('.answerContainer')

let LEVEL = 0



let counter = 0
let answer = []
let answerFromUser = []


function begin(){
  mainEl.style.WebkitAnimation = "fadeOut 1s";
  mainEl.style.animation = "fadeOut 1s";
   setTimeout(() => {
    
    mainNextEl.style.animation = "fadeIn 1s";
    mainNextEl.style.WebkitAnimation ="fadeIn 1s";
    setTimeout(() => {
      mainEl.style.display = "none";
      mainNextEl.style.display="block"
    },450)    
   },450)
}



function selectGrade(){
  mainNext.style.WebkitAnimation = "fadeOut 1s";
  mainNext.style.animation = "fadeOut 1s";
   setTimeout(() => {
    
    mainSecond.style.animation = "fadeIn 1s";
    mainSecond.style.WebkitAnimation ="fadeIn 1s";
    setTimeout(() => {
      mainNext.style.display = "none";
      mainSecond.style.display="block"
    },450)    
   },450)
}

function startGame(counter,level){
  do{
    LEVEL = level
    mainSecondEl.style.WebkitAnimation = "fadeOut 1s";
    mainSecondEl.style.animation = "fadeOut 1s";
    setTimeout(() => {
      
      gamingEl.style.animation = "fadeIn 1s";
      gamingEl.style.WebkitAnimation ="fadeIn 1s";
      setTimeout(() => {
        mainSecondEl.style.display = "none";
        gamingEl.style.display="block"
      },450)    
    },450)   
    
  } while(false){}  
  
  if(counter<level){
       setTimeout(function(){     
         makeNumber()       
         setTimeout(function(){          
           deleteNumber()          
         },1700,counter)         //1700
         counter++;         
         startGame(counter,level)         
         },3700)            //3700
  }
  else{      
      setTimeout(function(){
        console.log('Done!')
           showBtn()
         },2000)
      }
}
function deleteNumber(){
  answer.push(gamingBoxEl.innerHTML)
  gamingBoxEl.innerHTML='&nbsp;'
  console.log('deleteNumber!')
}
function makeNumber(){
  gamingBoxEl.innerHTML=Math.floor(Math.random()*10)
  console.log('makenumber!')
}
 function showBtn(){
  gamingEl.style.WebkitAnimation = "fadeOut 1s";
  gamingEl.style.animation = "fadeOut 1s";
   setTimeout(() => {
    
    resultEl.style.animation = "fadeIn 1s";
    resultEl.style.WebkitAnimation ="fadeIn 1s";
    setTimeout(() => {
      gamingEl.style.display = "none";
      resultEl.style.display="block"
    },450)    
  },450) 
  console.log(answer)
    
 }

 function showResult(){
  resultEl.style.WebkitAnimation = "fadeOut 1s";
  resultEl.style.animation = "fadeOut 1s";
   setTimeout(() => {
    
    showResultEl.style.animation = "fadeIn 1s";
    showResultEl.style.WebkitAnimation ="fadeIn 1s";
    setTimeout(() => {
      resultEl.style.display = "none";
      showResultEl.style.display="block"
    },450)    
   },450)
   
   if(LEVEL === 10){
    lv2Result()
   }
   else if(LEVEL === 20){
    lv5Result()
   }
 }


// 정답 화면 생성

function lv2Result (){
  for(let i=0; i<10; i++){
    const answerNumber = document.createElement('div')  
    answerNumber.classList.add('answerNumber') 
    answerContainerEl.appendChild(answerNumber)
    answerNumber.innerHTML=`${i+1}번`
    const answerAnswerEl = document.createElement('div')
    answerAnswerEl.classList.add('answerAnswer')
    answerNumber.append(answerAnswerEl)     
    answerAnswerEl.innerHTML= answer[i]  
  }
}


function lv5Result(){
  for(let i=0; i<20; i++){
    const answerNumber = document.createElement('div')  
    answerNumber.classList.add('answerNumber') 
    answerContainerEl.appendChild(answerNumber)
    answerNumber.innerHTML=`${i+1}번`
    const answerAnswerEl = document.createElement('div')
    answerAnswerEl.classList.add('answerAnswer')
    answerNumber.append(answerAnswerEl)     
    answerAnswerEl.innerHTML= answer[i]    
  }
}

//   for(let i=0; i<20; i++){
    
//   const answerAnswerEl = document.createElement('div')
//   answerAnswerEl.classList.add('answerAnswer')
//   const answerNumberEl = document.createElement('div')
//   answerNumberEl.classList.add('answerNumber')
//   answerNumberEl.append(answerAnswerEl)
//   answerContainerEl.appendChild(answerNumberEl)

//   answerNumberEl.innerHTML = `${i+1}번`
//   answerAnswerEl.innerHTML = answer[i]
//   console.log(answerAnswerEl)
  
//   }
// }




 

// function showAnswer() {
//   const li = document.createElement('li');
//   li.innerHTML = answer
//   li.classList.add('answer')
//   const ul = document.querySelector('.answer');
//   ul.appendChild(li)
//   console.log(ul)
//   setTimeout(() => {
//     gsap.to(answerBtn,1,{
//     opacity:0
//     })
//   }, 500);
// }


// function showAndOut(counter,level){  
//   for(let i=0; i<level; i++){
//     let div = document.createElement("div");
//     let containerEl = document.querySelector('.gamingBox')
//     div.classList.add('number');
//     div.innerText = Math.floor(Math.random()*10)
//     containerEl.appendChild(div)
//   }

//   let boxsEl = document.querySelectorAll('.number');
//   console.log(level)
// if(counter<boxsEl.length){
//   setTimeout(function(){
//     boxsEl[counter].style.display = 'block';
//     answer.push(boxsEl[counter].innerText)
//     console.log(counter)        
//     setTimeout(function(){
//       boxsEl[counter-1].style.display='none';
//     },1700,counter)    
//     counter++;
//     console.log(counter)
    
//     showAndOut(counter)
    
//     },3700)
//   }
//   else{
//     console.log(answer)
//     setTimeout(function(){
//       showBtn()
//     },2000)

//   }
// }





// answerForm.addEventListener('submit',function(event){
//   event.preventDefault()
//   answerFromUser = answerBox.value.split('')
//   console.log(answerFromUser)  
//   if(_.isEqual(answer,answerFromUser)){
//     console.log('정답입니다!')
//   }
// })

