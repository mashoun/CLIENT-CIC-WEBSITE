import { defineStore } from "pinia";

export const useStore = defineStore('store', {
    state: () => ({

        profile: {
            "contact": {
                "email": "",
                "number": "",
                "address": "",
                "facebook": "",
                "instagram": "",
                "tiktok": "",
                "linkedin": "",
                "getStartedUrl": "",
                "whatsapp":"",
                "ardeNumber":""
            },
            "media": [
                {
                    "id": "0",
                    "date": "",
                    "thumbnail": "",
                    "index": "0"
                },
                {
                    "id": "1",
                    "date": "",
                    "thumbnail": "",
                    "index": "1"
                },
                {
                    "id": "2",
                    "date": "",
                    "thumbnail": "",
                    "index": "2"
                },
            ],
            "partners": [
                {
                    "id": "",
                    "date": "",
                    "thumbnail": "",
                    "index": ""
                },
            ],
            "workshops": [
                {
                    "id": "",
                    "date": "",
                    "thumbnail": "",
                    "title": "",
                    "description": "",
                    "link": "",
                    "index": "",
                    "schedule":""
                },
            ],
            "certifications": [],
            "majors": [
                {
                    "id": "",
                    "date": "",
                    "thumbnail": "",
                    "title": "",
                    "description": "",
                    "link": "",
                    "index": "",
                    "tag":""
                },
            ],
            "fees": [
                {
                    "id": "",
                    "date": "",
                    "degree": "",
                    "credits": "",
                    "applicationFees": "",
                    "downPayment": "",
                    "p18Month": "",
                    "totalFees": "",
                    "index": ""
                },
            ],
            "events":[
                {
                    "id":"",
                    "index":"",
                    "embed":"",
                    "title":"",
                    "description":""
                }
            ],
            "team":[
                {
                    "id":"",
                    "index":"",
                    "thumbnail":"",
                    "name":"",
                    "position":"",
                    "description":""
                }
            ]
        },



    }),
    actions: {

        getApi() {
            return 'https://script.google.com/macros/s/AKfycbyeOFcv0fMS8PUci7cGCypVTIHJpa_RZay9JbDG9eEV_bxaz4yOIg3P7sJdY4X8KFsI/exec'
        },
        extractCanvaID(canvaEmbedLink) {
            // Define a regular expression to match the Canva ID
            const regex = /\/design\/(\w+)\//;

            // Use the regular expression to extract the ID
            const match = canvaEmbedLink.match(regex);

            if (match) {
                return match[1];
            } else {
                // Return null if no match is found
                return null;
            }
        }      
          
          

    }
})