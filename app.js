let btn1 = document.querySelector('.button1');
let btn2 = document.querySelector('.button2');
let box = document.querySelector('.box');
let body = document.querySelector('body');  // Assuming you want to change body background
let str1 = "";
let str2 = "";


const btnevent1 = () => {
    let number = "0123456789abcdef";
     str1="";
    
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 16);
        str1 += number[random];
    }
    

    let x = `linear-gradient(137deg, #${str1}, #FF5733 30%, #33C1FF 70%, #33C1FF)`;
    
   
    btn1.textContent=  '#'+str1;
    body.style.background = x;
    
    box.textContent = `background: ${x};`;
    
};


const btnevent2 = () => {
    let number = "0123456789abcdef";
 
     str2 = "";  
    

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 16);
        str2 += number[random];
    }
    
   
    let y = `linear-gradient(135deg, #${str1}, #FF5733 30%, #${str2} 70%, #33C1FF)`;
    btn2.textContent='#'+str2;
    
    body.style.background = y;
    
    // Display the CSS code as text inside the box
    box.textContent = `background: ${y};`;
};


box.addEventListener('click', () => {
    // Prepare the hex codes as a single string
    let hexCodes = `background-color:linear-gradient(135deg, #${str1}, #FF5733 30%, #${str2} 70%, #33C1FF);`;

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(hexCodes).then(() => {
        // Alert the user that the colors were copied
        alert("Hex codes copied to clipboard:\n" + hexCodes);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
});

// Add event listeners for both buttons
btn1.addEventListener('click', btnevent1);
btn2.addEventListener('click', btnevent2);

