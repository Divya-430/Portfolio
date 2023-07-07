const scriptURL = 'https://script.google.com/macros/s/AKfycbzFPVGxI-75Ilkm2z_EMuI9ubPlp8-7dQmMzzdPiIunLPPzj3bcY1ohMdT_DfZ3zPwhTA/exec'
            const form = document.forms['submit-to-google-sheet']
            const msg=document.getElementById("msg")
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML="Message sent successfully"
                    setTimeout(function(){
                        msg.innerHTML=""
                    },5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
            })