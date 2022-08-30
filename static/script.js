const serviceRatings = document.querySelectorAll('.btn-choice')

for(var i = 0; i < serviceRatings.length; i++){    
    serviceRatings[i].addEventListener('mouseover', selectRating)
    
    function selectRating(e){  
        if(e.target.id.slice(-1) > 1){
            // cleaning an old choices
            for(var i = 0; i < serviceRatings.length; i++){
                serviceRatings[i].classList.remove('btn-choice-selected')
                serviceRatings[i].classList.remove('btn-choice-b4-selected')
            } 
            // get ratings buttons id's   
            let prmId = e.target.id
            let scdId = 'rating-' + (prmId.slice(-1) - 1).toString()
            // selecting ratings buttons        
            let prmBtn = document.querySelector(`#${prmId}`)
            let scdBtn = document.querySelector(`#${scdId}`)      
            // adding css class 
            prmBtn.classList.add('btn-choice-selected')
            scdBtn.classList.add('btn-choice-b4-selected')
            
        } else{
                // cleaning an old choices
                for(var i = 0; i < serviceRatings.length; i++){
                    serviceRatings[i].classList.remove('btn-choice-selected')
                    serviceRatings[i].classList.remove('btn-choice-b4-selected')
                }       
                // get ratings buttons id's   
                let prmId = e.target.id
                // selecting ratings buttons        
                let prmBtn = document.querySelector(`#${prmId}`)
                // adding css class 
                prmBtn.classList.add('btn-choice-selected')
        }
        // session storage for number of rating stars
        localStorage.setItem('ratingStar', e.target.id.slice(-1))
        // changing link to thank-you.html   
        let link = document.querySelector('#link-btn')             
        link.href = 'thank-you.html'        
    }   
}

// checking if rating is choosen
const submit = document.querySelector('.btn-submit')
submit.addEventListener('click', function(){
    if(localStorage.getItem('ratingStar') === null){
        // creating msg and blocking submit btn NOTE: i dont like it - animation is enough
        // let msg = document.createElement('p')
        // msg.className = 'msg-bottom'
        // msg.innerHTML = 'Please select a rating!'
        // submit.parentElement.appendChild(msg)
        // submit.disabled = true
        // setTimeout(() => document.querySelector('.msg-bottom').remove(), 1000)
        // setTimeout(() => submit.removeAttribute('disabled'), 1000)

        // create animation
        const btn1 = document.querySelector('#rating-1')
        const btn2 = document.querySelector('#rating-2')
        const btn3 = document.querySelector('#rating-3')
        const btn4 = document.querySelector('#rating-4')
        const btn5 = document.querySelector('#rating-5')

        btn1.classList.add('btn-anim')
        setTimeout(function(){
            btn1.classList.remove('btn-anim'); btn2.classList.add('btn-anim')
        }, 200 )  
        setTimeout(function(){
            btn2.classList.remove('btn-anim'); btn3.classList.add('btn-anim')
        }, 400 )
        setTimeout(function(){
            btn3.classList.remove('btn-anim'); btn4.classList.add('btn-anim')
        }, 600 )  
        setTimeout(function(){
            btn4.classList.remove('btn-anim'); btn5.classList.add('btn-anim')
        }, 800 )  
        setTimeout(function(){
            btn5.classList.remove('btn-anim')
        }, 1000 )        
        
    }
    
})


