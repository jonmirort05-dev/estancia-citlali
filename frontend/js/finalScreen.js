const FinalScreen = {

    show(){

        const card = document.querySelector(".glass-card");

        card.innerHTML = `

        <div class="final-screen">

            <div class="hotel-icon">

                🏨

            </div>

            <h1>

                Estancia Citlali

            </h1>

            <h2>

                Tu check-in ha sido confirmado.

            </h2>

            <p>

                Gracias por responder cada una de las habitaciones.

                Ya tenemos todo listo para recibirte.

            </p>

            <div class="loading-line"></div>

            <p class="message">

                Esperamos que este fin de semana esté lleno de risas,
                comida rica, buenos recuerdos y muchos momentos bonitos.

            </p>

            <button id="finishButton">

                💙 Hasta muy pronto

            </button>

        </div>

        `;

        document.querySelector("#finishButton")
        .addEventListener("click",()=>{

            location.reload();

        });

    }

};