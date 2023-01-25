const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function(){
    modalChoiceBtns.classList.toggle('modal-btns-reverse')
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')
    const mail = consentFormData.get("email")
    
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="img/giphy (1).gif" class="loading">
        <p id="upload-text">Uploading your data to the in our storage...</p>
    </div>` 

    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        just a wait a little more...`
    }, 1500)

    setTimeout(function(){
         document.getElementById('modal-inner').innerHTML = `
        <div class="modal-inner-loading">
        <img src="img/tired.gif" class="loading2" >
        <p id="upload-text">this may have taken a while</p>
    </div>` 
    }, 3500)

    setTimeout(function(){
         document.getElementById('modal-inner').innerHTML = `
        <div class="modal-inner-loading">
        <img src="img/tired2.gif" class="loading2" >
        <img src="img/zzz.gif" class="loading3" >
    </div>` 
    }, 6000)
    
    setTimeout(function(){
         document.getElementById('modal-inner').innerHTML = `
        <div class="modal-inner-loading">
        <img src="img/thanks.gif" class="loading2" >
        <p id="upload-text">for your patience</p>
    </div>` 
    }, 9000)



    
      setTimeout(function(){
         document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you are great! </h2>
         <p>We just stored your name : <br><span class="modal-display-name">${fullName}</span> <br> and your mail address: <span class="modal-display-name">${mail}</span> </p>
         <div class="end-gif">
             <img src="img/end.gif" id="end-gif">
          </div>
     `
      modalCloseBtn.disabled = false
 }, 12000)
   
})
var input = document.getElementById("myInput");
  input.addEventListener("click", function() {
    input.classList.add("after");
  });

  var my2input = document.getElementById("my2input");
  my2input.addEventListener("click", function() {
    my2input.classList.add("after");
  })