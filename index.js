
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        btnAnnimation(buttonInnerHtml);

    });

}

document.addEventListener("keydown", function(event) {
        
        makeSound(event.key);

        btnAnnimation(event.key);

});

function makeSound(key) {

        switch (key) {
            case 'w':   const audio = new Audio("sounds/crash.mp3");
                        audio.play();
                
                break;
        
            case 'a':   const audio1 = new Audio("sounds/kick-bass.mp3");
                        audio1.play();
                break;

            case 's':   const audio2 = new Audio("sounds/snare.mp3");
                        audio2.play();
            break;

            case 'd':   const audio3 = new Audio("sounds/tom-1.mp3");
                        audio3.play();
            break;

            case 'j':   const audio4 = new Audio("sounds/tom-2.mp3");
                        audio4.play();
            break;

            case 'k':   const audio5 = new Audio("sounds/tom-3.mp3");
                        audio5.play();
            break;

            case 'l':   const audio6 = new Audio("sounds/tom-4.mp3");
                        audio6.play();
            break;

            default : console.log(buttonInnerHtml);
        }

    }

    function btnAnnimation(key){

        var activeButton = document.querySelector("." + key);
        
        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }