import greeter from './greeter';

function addMessage(message: string) {
    let div = document.createElement('div');
    div.innerText = message;
    document.body.appendChild(div);
}

addMessage('Hello CNUG');
addMessage(greeter('CNUG'));