let images = ['ama-dablam-g4ac46f31c_1920.jpg', 'godafoss-gdfd18d0b9_1920.jpg', 'mountains-ge189c32b0_1280.jpg', 'nature-g368d984a7_1920.jpg', 'road-ga5df27db6_1920.jpg'];
let container = document.querySelector('#container');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let count = 0;

left.addEventListener('click', leftImage);
right.addEventListener('click', rightImage);

function leftImage(){
    count--;
    if(count == -1){
        count = images.length - 1;
        container.setAttribute('src', `./Images/${images[count]}`);
    }else{
        container.setAttribute('src', `./Images/${images[count]}`);
    }
}

function rightImage(){
    count++;
    if(count == 5){
        count = 0;
        container.setAttribute('src', `./Images/${images[count]}`);
    }else{
        container.setAttribute('src', `./Images/${images[count]}`);
    }
}




