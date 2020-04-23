const correctAnswer = ['A','A','C','A','B','B','D','C','A','B'];
const form = document.querySelector('.quiz-form');

const  result = document.querySelector('.result');

form.addEventListener('submit',e => {
    e.preventDefault();

    let score = 0;
userAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value]
 
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
        if(score >= 90)
        {
            result.querySelector('span').textContent = `${output}% 😍❤️ `;
        }
        else if(score >= 80 && score < 90)
        {
            result.querySelector('span').textContent = `${output}% 🥰` ;
        }
        else if(score >= 70 && score < 80)
        {
            result.querySelector('span').textContent = `${output}% 😉`;
        }
        else if(score >= 60 && score < 70)
        {
            result.querySelector('span').textContent = `${output}% 😙`;
        }
        else if(score >= 50 && score < 60)
        {
            result.querySelector('span').textContent = `${output}% 😗`;
        }
        else if(score >= 40 && score < 50)
        {
            result.querySelector('span').textContent = `${output}% 😑`;
        }
        else if(score >= 30 && score < 40)
        {
            result.querySelector('span').textContent = `${output}% 😨`;
        }
        else if(score >= 20 && score < 30)
        {
            result.querySelector('span').textContent = `${output}% 😵`;
        }
        else if(score >= 10 && score < 20)
        {
            result.querySelector('span').textContent = `${output}% 😡`;
        }
        else
        {
            result.querySelector('span').textContent = `${output}% 🤬`;
        }

//==================================================================================

        if(output === score){
            clearInterval(timer);
        }
        else{
            output++;
        }
    },11);
});


