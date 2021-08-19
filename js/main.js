const mainEl = document.querySelector('#main')
const mainNextEl = document.querySelector('#mainNext')
const mainSecondEl = document.querySelector('#mainSecond')
const gamingEl = document.querySelector('#gaming')
const setGrade = document.querySelector('.grade')
const answerBtn = document.querySelector('#answerBtn')
const answerContainerEl = document.querySelector('.answerContainer')
const gamingBoxEl = document.querySelector('.gamingBoxInner')
const resultEl = document.querySelector('#result')
const showResultEl = document.querySelector('#showResult')
const lv2El = document.querySelector('#lv-2')
const lv5El = document.querySelector('#lv-5')
const resultContainerEl = document.querySelector('.resultContainer')
const textBoxEl = document.querySelector('.textBox')
const resultContainerPEl = document.querySelector('.resultContainerP')
let sparkleCount = 0
let sparkleElcount = 0
let c = 0

let LEVEL = 0
let counter = 0
let answer = []



function sparkle (LEVEL) {     
  const answerNumbers = document.querySelectorAll('.answerNumber')
  if(LEVEL ===10 ) {    
    if(sparkleCount<3){
      answerNumbers[sparkleElcount].style.backgroundColor='whitesmoke';
      setTimeout(() => {    
        answerNumbers[sparkleElcount].style.backgroundColor='#fceabb';
      }, 300);  
      setTimeout(() => {    
        sparkleCount++    
        sparkle(10)  
        console.log(sparkleCount)
      }, 600);
      }
      else{
        setTimeout(() => {
          console.log('done!')
          if(sparkleElcount<answerNumbers.length){        
          sparkleElcount++
          sparkleCount = 0
          sparkle(10)
          }        
          else{
            console.log('모두 변경 완료')            
          }  
        }, 1900);
      }
    }
  
}






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


lv2El.addEventListener('click',function(){
  
  for(let i=0; i<8; i++){
    let k=0
    const answerNumber = document.createElement('div')
    answerNumber.classList.add('answerNumber')
    answerNumber.innerHTML = `${i+3} = ${i+1}`;
    answerContainerEl.append(answerNumber)
    const answerInput = document.createElement('div')
    answerInput.classList.add('answerInput')
    answerNumber.appendChild(answerInput)
    for(let j=0; j<1; j++){
      const p = document.createElement('p')
      p.classList.add('answerO')
      p.innerHTML = 'O'
      answerInput.appendChild(p)
      
      const p1 = document.createElement('p')
      p1.classList.add('answerX')
      p1.innerHTML = 'X'
      answerInput.appendChild(p1)
    }           
    
  }
 

  const answerOEl = document.querySelectorAll('.answerO')
  const answerXEl = document.querySelectorAll('.answerX')

  for(let i=0; i<8; i++){
  answerOEl[i].addEventListener('click',function(event){
    if(answerXEl[i].classList==""){
      if(event.target.classList[0]==="answered"){
        event.target.classList.remove('answered')      
        console.log('1')
        return        
      }   
    }
    else{
      answerXEl[i].classList.remove('answered')
      console.log('2')
    }

    event.target.classList.add('answered')  
  })
    
  answerXEl[i].addEventListener('click',function(event){
    if(answerOEl[i].classList==""){
      if(event.target.classList[0]==="answered"){
        event.target.classList.remove('answered')      
        return
      }
    }
    else{
      answerOEl[i].classList.remove('answered')
    }
    event.target.classList.add('answered')  
  })  
}
answerContainerEl.classList.add('lv2')

})


lv5El.addEventListener('click',function(){
  for(let i=0; i<15; i++){
    const answerNumber = document.createElement('div')
    answerNumber.classList.add('answerNumber')
    answerNumber.innerHTML = `${i+6} = ${i+1}`;
    answerContainerEl.append(answerNumber)
    const answerInput = document.createElement('div')
    answerInput.classList.add('answerInput')
    answerNumber.appendChild(answerInput)
    for(let j=0; j<1; j++){
      const p = document.createElement('p')
      p.classList.add('answerO')
      p.innerHTML = 'O'
      answerInput.appendChild(p)
      
      const p1 = document.createElement('p')
      p1.classList.add('answerX')
      p1.innerHTML = 'X'
      answerInput.appendChild(p1)
    }    
  }

  const answerOEl = document.querySelectorAll('.answerO')
  const answerXEl = document.querySelectorAll('.answerX')

  for(let i=0; i<20; i++){
  answerOEl[i].addEventListener('click',function(event){
    if(answerXEl[i].classList==""){
      if(event.target.classList[0]==="answered"){
        event.target.classList.remove('answered')      
        
        return        
      }   
    }
    else{
      answerXEl[i].classList.remove('answered')
      console.log('2')
    }

    event.target.classList.add('answered')  
  })
    
  answerXEl[i].addEventListener('click',function(event){
    if(answerOEl[i].classList==""){
      if(event.target.classList[0]==="answered"){
        event.target.classList.remove('answered')      
        return
      }
    }
    else{
      answerOEl[i].classList.remove('answered')
    }
    event.target.classList.add('answered')  
  })  
}

})




function startGame(counter,level){ 
  do{         
    console.log(c)
    c++
    if(level===20&&c===6){
      setTimeout(() => {
        sparkle(10)        
      }, 3700);  
      setTimeout(() => {
        gsap.to(answerContainerEl,1,{
          opacity:1
        })
      },2000);
    }
    else if(level===10&&c===3){
      setTimeout(() => {
        sparkle(10)        
      }, 3700);   
      setTimeout(() => {
        gsap.to(answerContainerEl,1,{
          opacity:1
        })
      },2000);
    }    
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
         },100,counter)         //1700
         counter++;         
         startGame(counter,level)         
         },100)            //3700
         
         
         
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
  
}
function makeNumber(){
  gamingBoxEl.innerHTML=Math.floor(Math.random()*10)
  
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
  for(let i=0; i<answer.length; i++){
    answerData[i].number = answer[i]
  }
 
  comeon()
  
    
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
    const resultNumber = document.createElement('div')  
    resultNumber.classList.add('resultNumber') 
    resultContainerEl.appendChild(resultNumber)
    resultNumber.innerHTML=`${i+1}번`
    const resultAnswerEl = document.createElement('div')
    resultAnswerEl.classList.add('resultAnswer')
    resultNumber.append(resultAnswerEl)     
    resultAnswerEl.innerHTML= answer[i]   
    
    const resultNumberP = document.createElement('div')  
    resultNumberP.classList.add('resultNumberP') 
    resultContainerPEl.appendChild(resultNumberP)
    resultNumberP.innerHTML=`${i+1}번`
    const resultAnswerPEl = document.createElement('div')
    resultAnswerPEl.classList.add('resultAnswerP')
    resultNumberP.append(resultAnswerPEl)     
    resultAnswerPEl.innerHTML= answer[i]     
   }  
  for(let i=0; i<2; i++){
    const resultAnswerPEls = document.querySelectorAll(`.resultAnswerP:nth-child(1)`)
    resultAnswerPEls[i].innerHTML=''        
  }
  for(let j=0; j<8; j++){    
    const resultUserForm = document.querySelectorAll(`.resultAnswerP:nth-child(1)`)  
    console.log(resultUserForm)
    console.log(answer)
    if(resultUserForm[j+2].innerHTML===answer[j]){
      answerData[j+2].answer = true
      console.log(`${j+3}번 문제 정답:O`)
    }
    else{
      answerData[j+2].answer = false
      console.log(`${j+3}번 문제 정답:X`)
    }
    }

    console.log(answerData)
    console.log('정답객체↑')
    
    console.log(answerFromUser)
    console.log('사용자 정답객체↑')
}



function lv5Result(){
  for(let i=0; i<20; i++){
    const resultNumber = document.createElement('div')  
    resultNumber.classList.add('resultNumber') 
    resultContainerEl.appendChild(resultNumber)
    resultNumber.innerHTML=`${i+1}번`
    const resultAnswerEl = document.createElement('div')
    resultAnswerEl.classList.add('resultAnswer')
    resultNumber.append(resultAnswerEl)     
    resultAnswerEl.innerHTML= answer[i]       
  }
 
}
function howToPlay(){
  gsap.to(textBoxEl,1,{
    opacity:0
  })
  setTimeout(() => {
    gsap.to(textBoxEl,.5,{            
      height:460      
    })
  }, 1000);
}
function reStart() {
  showResultEl.WebkitAnimation = 'fadeOut 1s'
  showResultEl.Animation = 'fadeOut 1s'
  window.location = 'index.html'
}

const answerNumberEl = document.querySelector('.answerNumber')





function comeon(){
  const o = document.querySelectorAll('.answerO')
  const x = document.querySelectorAll('.answerX')

  for(let i=0; i<8; i++){
    if(o[i].classList[1]==='answered'){
      answerFromUser[i].o = true
    } 
    else if(x[i].classList[1]==='answered'){
      answerFromUser[i].x = true
    }
  }

  
}



















// if(level === 10){
//   for(let i=0; i<10; i++){
//     const answerNumber = document.createElement('div')
//     answerNumber.classList.add('answerNumber')
//     answerNumber.innerHTML = `${i+1}번`;
//     answerContainerEl.append(answerNumber)
//     const answerInput = document.createElement('div')
//     answerInput.classList.add('answerInput')
//     answerNumber.appendChild(answerInput)
//     for(let j=0; j<1; j++){
//       const p = document.createElement('p')
//       p.id = `O${j}`
//       p.innerHTML = 'O'
//       answerInput.appendChild(p)
  
//       const p1 = document.createElement('p')
//       p1.id = `X${j}`
//       p1.innerHTML = 'X'
//       answerInput.appendChild(p1)
//      }    
//   }
// }
// else if(level === 20) {
//   for(let i=0; i<20; i++){
//     const answerNumber = document.createElement('div')
//     answerNumber.classList.add('answerNumber')
//     answerNumber.innerHTML = `${i+1}번`;
//     answerContainerEl.append(answerNumber)
//     const answerInput = document.createElement('div')
//     answerInput.classList.add('answerInput')
//     answerNumber.appendChild(answerInput)
//     for(let j=0; j<1; j++){
//       const p = document.createElement('p')
//       p.classList.add('answerO')
//       p.innerHTML = 'O'
//       answerInput.appendChild(p)
  
//       const p1 = document.createElement('p')
//       p1.classList.add('answerX')
//       p1.innerHTML = 'X'
//       answerInput.appendChild(p1)
//      }    
//   }      
// }


// const answerOEl = document.querySelector('.answerO')
//     const answerXEl = document.querySelector('.answerX')

//     answerOEl.addEventListener('click',function(event){
//       if(answerXEl.classList==""){
//         if(event.target.classList[0]==="answered"){
//           event.target.classList.remove('answered')      
//           return
//         }
//       }
//       else{
//         answerXEl.classList.remove('answered')
//       }
//       event.target.classList.add('answered')  
//     })
    
//     answerXEl.addEventListener('click',function(event){
//       if(answerOEl.classList==""){
//         if(event.target.classList[0]==="answered"){
//           event.target.classList.remove('answered')      
//           return
//         }
//       }
//       else{
//         answerOEl.classList.remove('answered')
//       }
//       event.target.classList.add('answered')  
//     })

// let colorCount=0

// const d = document.querySelectorAll('.answerNumber')
// let dC = 0;
// function go(){
//   if(dC<d.length){
//     setTimeout(() => {
      
//     }, 4000)
//     dC++
//     go()
//   }
  
// }


