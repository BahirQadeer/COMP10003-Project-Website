let specialTopics = ['football', 'weather', 'AI']

let genericPrompts = ['Tell me more!', 'That\'s fascinating!', 'Can you elaborate on that?']

function chat() {
    // store user's input in a variable
    let userInput = document.querySelector('input#user-chat').value
    // print user's input to the page
    addToOutput(userInput, 'user')

    // check if user mentioned a special topic
    for (let topic of specialTopics) {
        if (userInput.includes(topic)) { // if they did, respond to the topic
            addToOutput('Wow - I am interested in ' + topic + ' too!', 'chatbot')
        }
    }
    
    // randomly choose a generic prompt
    let randomNumber = Math.floor( Math.random() * 3 )
    // print it to the page
    addToOutput(genericPrompts[randomNumber], 'chatbot')
    
    // set focus to the <input> and clear it
    document.querySelector('input#user-chat').focus()
    document.querySelector('input#user-chat').value = ''
    
    // stop page from reloading (default behaviour of <form>)
    event.preventDefault()
}

/* add one chat message to the page */
function addToOutput(text, speaker) {
    // find the output area
    let output = document.querySelector('section#output')
    // create a new <p>
    let newP = document.createElement('p')
    // add the text we want to output
    newP.textContent = speaker + ': ' + text
    // give the <p> the right CSS class
    newP.classList.add(speaker)
    // appent the new <p> to the output area
    output.appendChild(newP)
}

