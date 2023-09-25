const COLOR_CHAR_LIST = [
    ...Array.from(Array(10).keys()).map((a) => `${a}`),
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];

function generateRandomColor(){
    let color = '#';

    for(let i =0; i < 6; i++){
        let randomIndex = Math.floor(Math.random() * COLOR_CHAR_LIST.length)
        color += COLOR_CHAR_LIST[randomIndex];
    }

    return color
}


function changeBackGroundColor() {
    $("body").css("background-color", generateRandomColor());
}

changeBackGroundColor();