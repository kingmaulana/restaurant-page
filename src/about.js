import tacoBg from './asset/background-taco.jpg'

export function displayContactUs() {
    

    let content = document.querySelector('#content');

    let contactBox = document.createElement('div');
    contactBox.className = 'contact-box';

    contactBox.innerHTML = `<div class='contact-sub-box'>
    <h1>Contact us</h1>
    <h3>Customer Support : </h3>
    <div class='call-agent'>
        <p>Chat with an agent</p>
        <div class="live-chat">
            <p>Live Chat</p>
            <button>Start chat</button>
        </div>
        <div class="call-text">
            <p>Call or text us - <span>1-34224-321-545</span></p>
            <p>Available 24/7</p>
        </div>
    </div>
    <div class="open">
        <h2>Open Restaurant</h2>
        <p> - Everyday from 12PM - 12 AM </p>
    </div>
    <div class="location">
        <h2>Location</h2>
        <p> - 123 Sabana Hantipan, Samuda, Indonesia</p>
    </div>
    
    </div>`;

    content.appendChild(contactBox);
}



