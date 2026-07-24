const UI = {

    showRoom(room){

        const question = room.questions[App.currentQuestion];

        const card = document.querySelector(".glass-card");

        card.innerHTML = `



        <div class="progress-section">

    <p class="progress-text">

        🏨 Habitación ${room.id} de ${App.totalRooms}

    </p>

    <div class="progress-bar">

        <div
    class="progress-fill"
    style="width:${(room.id / App.totalRooms) * 100}%"
></div>

    </div>

</div>
            <div class="logo">

                <img
                    src="imagenes/svg/star.svg"
                    class="logo-star"
                >

            </div>

           <div class="room-header">

    <div class="room-icon">

        ${room.icon}

    </div>

    <h1>

        ${room.title}

    </h1>

    <p class="subtitle">

        Habitación ${room.id}

    </p>

</div>

<div class="divider"></div>

<div class="room-description">

    ${room.description}

</div>

<div class="divider"></div>

<div id="questionContainer">

    ${QuestionRenderer.render(question)}

</div>
            <div class="buttons">

                <button id="backButton">

                    Atrás

                </button>

              <button id="nextButton">

    ${room.id === App.totalRooms
        ? "💙 Enviar respuestas y hacer check-in"
        : "Continuar"}

</button>

            </div>

        `;

        this.bindEvents(question);

        //=========================
        // BOTONES
        //=========================

        const backButton = document.querySelector("#backButton");

        if(App.currentRoom === 0 && App.currentQuestion === 0){

            backButton.style.visibility = "hidden";

        }

        backButton.addEventListener("click",()=>{

            if(App.currentQuestion > 0){


             if(App.currentRoom > 0){


                }

            }

        });

        const nextButton = document.querySelector("#nextButton");

        nextButton.addEventListener("click", async () => {
    
            if(!UI.validateQuestion(question)){

    alert("⚠️ Debes responder esta pregunta antes de continuar.");

    return;

}

          if(App.currentQuestion < room.questions.length - 1){

    card.classList.remove("fade-in");
    card.classList.add("fade-out");

    setTimeout(() => {

        App.currentQuestion++;

        UI.showRoom(room);

    }, 300);

}else{

                if(App.currentRoom < App.rooms.length - 1){

    card.classList.remove("fade-in");
    card.classList.add("fade-out");

    setTimeout(() => {

        App.currentRoom++;
        App.currentQuestion = 0;

        UI.showRoom(App.rooms[App.currentRoom]);

    },300);

          }else{

    const nextButton = document.querySelector("#nextButton");

    nextButton.disabled = true;

    nextButton.textContent = "🏨 Confirmando check-in...";

    const survey = SurveyExporter.export();
    
    console.log("SURVEY:", survey);

    const result = await API.sendResponses(survey);

    console.log(result);

    if(result && result.status === "ok"){

        setTimeout(()=>{

            FinalScreen.show();

        },1500);

    }else{

        nextButton.disabled = false;

        nextButton.textContent = "💙 Enviar respuestas y hacer check-in";

        alert("Hubo un problema al guardar las respuestas.");

    }

}

            }

        });

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

    },

    bindEvents(question){

        //=========================
        // INPUTS
        //=========================

        const input = document.querySelector(".question-input");

        if(input){

            input.value = question.answer ?? "";

            input.addEventListener("input",(event)=>{

                question.answer = event.target.value;

            });

        }

        //=========================
        // RADIO
        //=========================

        const radios = document.querySelectorAll('input[type="radio"]');

        radios.forEach(radio => {

            radio.checked = (radio.value === question.answer);

            radio.addEventListener("change",(event)=>{

                question.answer = event.target.value;

            });

        });

        //=========================
        // CHECKBOX
        //=========================

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        if(question.answer === null){

            question.answer = [];

        }

        checkboxes.forEach(checkbox => {

            checkbox.checked = question.answer.includes(checkbox.value);

            checkbox.addEventListener("change",()=>{

                question.answer = [];

                checkboxes.forEach(item=>{

                    if(item.checked){

                        question.answer.push(item.value);

                    }

                });

            });

        });

        //=========================
        // SELECT
        //=========================

        const select = document.querySelector("select");

        if(select){

            select.value = question.answer ?? "";

            select.addEventListener("change",(event)=>{

                question.answer = event.target.value;

            });

        }
//=========================
// RANGE
//=========================

const range = document.querySelector(".question-range");

if(range){

    const value = document.querySelector(".range-value");

   range.value = question.answer ?? 5;

if(question.answer !== null && question.answer !== undefined){

    value.textContent = question.answer;

}else{

    value.textContent = "Mueve el control";

}


    range.addEventListener("input",(event)=>{

        value.textContent = event.target.value;

        question.answer = event.target.value;

    });

}
    },

    validateQuestion(question){

        switch(question.type){

            case "text":
            case "textarea":
            case "email":
            case "date":
            case "time":
            case "select":

                return question.answer !== null &&
                       question.answer !== undefined &&
                       question.answer.toString().trim() !== "";

         case "radio":

    return question.answer !== null &&
           question.answer !== undefined;

            case "checkbox":

                return question.answer.length > 0;

      case "range":

    return question.answer !== null &&
           question.answer !== undefined;

            default:

                return true;

        }

    }

};