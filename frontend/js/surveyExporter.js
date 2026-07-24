const SurveyExporter = {

    export() {

        const survey = {

            fecha: new Date().toLocaleDateString(),

            hora: new Date().toLocaleTimeString(),

            habitaciones: []

        };

        App.rooms.forEach(room => {

            const roomData = {

                id: room.id,

                titulo: room.title,

                descripcion: room.description,

                preguntas: []

            };

            room.questions.forEach(question => {

                roomData.preguntas.push({

                    pregunta: question.title,

                    tipo: question.type,

                    respuesta: question.answer

                });

            });

            survey.habitaciones.push(roomData);

        });

        return survey;

    }

};