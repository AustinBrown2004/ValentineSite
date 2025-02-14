document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.querySelector(".hearts-container");
    const loveMessage = document.getElementById("love-message");

    function createHeart() {
        const heart = document.createElement("img");
        heart.src = "images/heart.png";
        heart.classList.add("heart");

        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.bottom = "-50px"; 
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 100);

    function showImages() {
        const images = [
            "images/image1.JPG",
            "images/image2.jpg",
            "images/image3.JPG",
            "images/image4.jpg",
            "images/image5.JPG",
            "images/image6.JPG",
            "images/image7.JPG",
            "images/image8.jpg",
            "images/image9.jpg",
            "images/image10.JPG",
            "images/image11.jpg",
            "images/image12.JPG",
            "images/image13.jpg",
            "images/image14.jpg",
            "images/image15.JPG",
            "images/image16.jpg"
        ];
        
        const positions = [
            { bottom: "5%", right: "5%" },
            { top: "5%", left: "5%" },
            { top: "5%", right: "5%" },
            { bottom: "5%", left: "5%" },
            { top: "40%", left: "10%" },
            { bottom: "40%", right: "10%" },
            { top: "20%", left: "40%" },
            { bottom: "20%", right: "40%" },
            { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
            { top: "10%", left: "30%" },
            { bottom: "10%", right: "30%" },
            { top: "30%", right: "10%" },
            { bottom: "30%", left: "10%" },
            { top: "60%", left: "5%" },
            { bottom: "60%", right: "5%" },
            { top: "70%", left: "50%", transform: "translateX(-50%)" }
        ];

        const container = document.querySelector(".image-container");

        function loopImages() {
            images.forEach((src, index) => {
                setTimeout(() => {
                    const img = document.createElement("img");
                    img.src = src;
                    img.classList.add("fade-image");

                    Object.assign(img.style, positions[index]);

                    container.appendChild(img);

                    setTimeout(() => {
                        img.classList.add("fade-out");
                        setTimeout(() => img.remove(), 1000);
                    }, 4000);
                }, index * 1000);
            });

            setTimeout(loopImages, images.length * 1000 + 500); // Restart loop after all images fade out
        }

        loopImages(); // Start the loop
    }

    // Show "I Love You" after 3 seconds
    setTimeout(() => {
        loveMessage.style.opacity = "1";
    }, 3000);

    setTimeout(showImages, 1000);
});
