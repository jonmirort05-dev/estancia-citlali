const Stars = {

    create() {

        const container = document.querySelector(".background");

        if (!container) return;

        const starsLayer = document.createElement("div");
        starsLayer.className = "stars-layer";

        const totalStars = 140;

        for (let i = 0; i < totalStars; i++) {

            const star = document.createElement("span");
            star.className = "star";

            // Colores de las estrellas
            const random = Math.random();

            if (random < 0.75) {

                star.classList.add("white");

            } else if (random < 0.95) {

                star.classList.add("gold");

            } else {

                star.classList.add("blue");

            }

            // Tamaño
            const size = Math.random() * 3 + 1;

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            // Posición
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;

            // Animación
            star.style.animationDelay = `${Math.random() * 6}s`;
            star.style.animationDuration = `${2 + Math.random() * 5}s`;

            starsLayer.appendChild(star);

        }

        container.appendChild(starsLayer);

    },

    shootingStar() {
        console.log("⭐ shootingStar ejecutada");

        const container = document.querySelector(".background");

        if (!container) return;

        const star = document.createElement("div");
        star.className = "shooting-star";

        star.style.top = "20%";
        star.style.left = "20%";
        container.appendChild(star);

        star.animate(
            [
                {
                    transform: "translate(0,0)",
                    opacity: 1
                },
                {
                    transform: "translate(500px,250px)",
                    opacity: 0
                }
            ],
            {
                duration: 1200,
                easing: "ease-out"
            }
        );

        setTimeout(() => {

            star.remove();

        }, 1200);

    }

};