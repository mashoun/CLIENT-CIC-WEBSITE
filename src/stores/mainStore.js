import { defineStore } from "pinia";

export const useStore = defineStore('store', {
    state: () => ({

        profile: {
            "contact": {
                "email": "info@cic-edu.com",
                "number": "123",
                "address": "http://map.cic-edu.org",
                "facebook": "http://fb.cic-edu.org",
                "instagram": "http://ig.cic-edu.org",
                "tiktok": "http://tiktok.cic-edu.org",
                "linkedin": "http://in.cic-edu.org",
                "getStartedUrl": "http://apply.cic-edu.org"
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
            return 'https://script.google.com/macros/s/AKfycbxbOzzAnbCz6Zv28LRmDOlF2TR-Dttcm7orVMKjovY0E4As0JsTh3Zt4w1qTzrIwVRB/exec'
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