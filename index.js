function renderData(data) {
    let adviceNumberSlot = document.querySelector('#advice-number')
    let adviceQuoteSlot = document.querySelector('#advice-quote')

    adviceNumberSlot.innerText = data.slip.id
    adviceQuoteSlot.innerText = data.slip.advice
}

let diceBtn = document.querySelector('#dice-btn')

diceBtn.addEventListener('click', function () {
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.adviceslip.com/advice");
    request.onload = function() {
        try {
            if (request.status == 200) {
                let responseTxt = request.response;
                let responseObj = JSON.parse(responseTxt);
                console.log(responseObj)
                renderData(responseObj)
            } else {
                throw new Error('ERROR: The request has failed')
            }
        } catch (error) {
            console.error(error)
        }
    }
    request.send()
})
