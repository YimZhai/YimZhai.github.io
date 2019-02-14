let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/blue.png') {
        myImage.setAttribute('src', 'images/red.png');
    } else {
        myImage.setAttribute('src', 'images/blue.png');
    }
};

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = '毕竟，' + name + '！';
    if (name === "大佬") {
        myHeading.style.color = 'green';
    } else {
        myHeading.style.color = 'black';
    }
}

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(storedName) {
    setUserName();
} else {
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;
