class Room{

    constructor(id,icon,title,description){

        this.id=id;

        this.icon=icon;

        this.title=title;

        this.description=description;

        this.questions=[];

    }

    addQuestion(question){

        this.questions.push(question);

    }

}