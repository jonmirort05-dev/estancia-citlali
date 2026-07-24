const Heartstopper = {

    symbols: ["❀", "✦", "✧", "❋"],

    launch() {

        const container = document.getElementById("heartstopperContainer");

        if (!container) return;

        for (let i = 0; i < 18; i++) {

            const symbol = document.createElement("span");

            symbol.className = "heart-leaf";

            symbol.textContent = this.symbols[
                Math.floor(Math.random() * this.symbols.length)
            ];

            symbol.style.left = `${10 + Math.random() * 80}%`;
            symbol.style.top = `${55 + Math.random() * 25}%`;
            symbol.style.fontSize = `${16 + Math.random() * 12}px`;
            symbol.style.animationDuration = `${3 + Math.random() * 2}s`;
            symbol.style.animationDelay = `${Math.random()}s`;

            container.appendChild(symbol);

            setTimeout(() => {

                symbol.remove();

            }, 5000);

        }

    }

};