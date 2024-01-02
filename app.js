

const slides= document.querySelectorAll(".slide");

console.log(slides)

var counter = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`

    }
)

const goprevious = () => {
    counter--
    slideImage()
}

const gonext = () => {
    counter++
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
         

            slide.style.transform = `translateX(-${counter * 100}%)` 
totalSlides=4;
                if (counter < 0) {
                    counter = 0; // Prevent going below the first slide
                } else if (counter >= totalSlides) {
                    counter = totalSlides - 1; // Prevent going beyond the last slide
                }
      
        }
    )

}