const QuestionRenderer = {

    render(question) {

        switch (question.type) {

            case "text":
                return this.renderText(question);

            case "radio":
                return this.renderRadio(question);

            case "checkbox":
                return this.renderCheckbox(question);

            case "textarea":
                return this.renderTextarea(question);

            case "select":
                return this.renderSelect(question);

            case "date":
                return this.renderDate(question);

            case "number":
                return this.renderNumber(question);

            case "email":
                return this.renderEmail(question);

            case "time":
                return this.renderTime(question);

            case "range":
                return this.renderRange(question);

            default:
                return "<p>Tipo de pregunta no soportado.</p>";
            
            case "message":

    return `

        <div class="message-question">

            ${question.title}

        </div>

    `;

        }

    },

    renderText(question) {

        return `

            <div class="question">

                <label class="question-title">

                    ${question.title}

                </label>

                <input
                    type="text"
                    class="question-input"
                    placeholder="${question.placeholder}"
                    value="${question.answer ?? ""}"
                >

            </div>

        `;

    },

    renderRadio(question) {

        let html = `

            <div class="question">

                <label class="question-title">

                    ${question.title}

                </label>

        `;

        question.options.forEach(option => {

            html += `

                <label class="radio-option">

                    <input
                        type="radio"
                        name="question"
                        value="${option}"
                    >

                    <span>${option}</span>

                </label>

            `;

        });

        html += `</div>`;

        return html;

    },

    renderCheckbox(question) {

        let html = `

            <div class="question">

                <label class="question-title">

                    ${question.title}

                </label>

        `;

        question.options.forEach(option => {

            html += `

                <label class="checkbox-option">

                    <input
                        type="checkbox"
                        value="${option}"
                    >

                    <span>${option}</span>

                </label>

            `;

        });

        html += `</div>`;

        return html;

    },

    renderTextarea(question) {

        return `

            <div class="question">

                <label class="question-title">

                    ${question.title}

                </label>

                <textarea
                    class="question-input"
                    placeholder="${question.placeholder}"
                    rows="4"
                >${question.answer ?? ""}</textarea>

            </div>

        `;

    },

    renderSelect(question) {

        let html = `

            <div class="question">

                <label class="question-title">

                    ${question.title}

                </label>

                <select class="question-input">

        `;

        question.options.forEach(option => {

            html += `

                <option value="${option}">

                    ${option}

                </option>

            `;

        });

        html += `

                </select>

            </div>

        `;

        return html;

    },

    renderDate(question) {

        return `

            <div class="question">

                <label class="question-title">

                    ${question.title}

                </label>

                <input
                    type="date"
                    class="question-input"
                    value="${question.answer ?? ""}"
                >

            </div>

        `;

    },

    renderNumber(question) {

        return `

            <div class="question">

                <label class="question-title">

                    ${question.title}

                </label>

                <input
                    type="number"
                    class="question-input"
                    placeholder="${question.placeholder}"
                    value="${question.answer ?? ""}"
                >

            </div>

        `;

    },

    renderEmail(question) {

        return `

            <div class="question">

                <label class="question-title">

                    ${question.title}

                </label>

                <input
                    type="email"
                    class="question-input"
                    placeholder="${question.placeholder}"
                    value="${question.answer ?? ""}"
                >

            </div>

        `;

    },

    renderTime(question) {

        return `

            <div class="question">

                <label class="question-title">

                    ${question.title}

                </label>

                <input
                    type="time"
                    class="question-input"
                    value="${question.answer ?? ""}"
                >

            </div>

        `;

    },

    renderRange(question) {

        return `

            <div class="question">

                <label class="question-title">

                    ${question.title}

                </label>

                <div class="range-container">

                <span class="range-value">

    ${question.answer ?? "Mueve el control"}

</span>

                    <input
                        type="range"
                        min="1"
                        max="10"
                        value="${question.answer ?? 5}"
                        class="question-range"
                    >

                    <div class="range-labels">

                        <span>1 😐</span>

                        <span>10 🤩</span>

                    </div>

                </div>

            </div>

        `;

    }

};