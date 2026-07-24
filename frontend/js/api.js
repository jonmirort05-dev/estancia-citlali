const API = {

    url: "https://script.google.com/macros/s/AKfycbx0d-4SwD3mtYVDjK9XB5HzZZpPNWpbSutQzJ6Hr8ksnO6fYrScoUrpSa85IlFh0jVixQ/exec",
    
    async testConnection(){

        try{

            const payload = {
                action: "test"
            };

            console.log("PAYLOAD TEST:", payload);

            const response = await fetch(this.url,{
                method:"POST",
                headers:{
                    "Content-Type":"text/plain;charset=utf-8"
                },
                body:JSON.stringify(payload)
            });

            const result = await response.json();

            console.log("TEST RESPONSE:", result);

            return result;

        }catch(error){

            console.error(error);

            return null;

        }

    },

    async sendResponses(data){

        try{

            const payload = {

                action:"save",

                data:data

            };

            console.log("PAYLOAD SAVE:", payload);

            const response = await fetch(this.url,{
                method:"POST",
                headers:{
                    "Content-Type":"text/plain;charset=utf-8"
                },
                body:JSON.stringify(payload)
            });

            const result = await response.json();

            console.log("SAVE RESPONSE:", result);

            return result;

        }catch(error){

            console.error(error);

            return null;

        }

    }

};