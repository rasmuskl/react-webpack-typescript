//import greeter from './greeter';
//import './styles.css';

function addMessage(message: string) {
    let div = document.createElement('div');
    div.innerText = message;
    document.body.appendChild(div);
}

addMessage('Hello ANUG');
//addMessage(greeter('ANUG'));