const correctAnswer = ['A','A','C','A','B'];
const form = document.querySelector('.quiz-form');

const  result = document.querySelector('.result');

form.addEventListener('submit',e => {
    e.preventDefault();

    let score = 0;
userAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value]

    userAnswer.forEach((answer,index)=>{
        if(answer === correctAnswer[index]){
            score += 1
        }
    });
    score = score / correctAnswer.length * 100

    scrollTo(0,0);
    
    result.classList.remove('d-none');

    let output = 0
    const timer = setInterval( () => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{
            output++;
        }
    },15);
});


