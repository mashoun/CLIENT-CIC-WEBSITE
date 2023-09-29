import { defineStore } from "pinia";

export const useStore = defineStore('store', {
    state: () => ({

        profile:{
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
                    "id": "",
                    "date": "",
                    "thumbnail": "",
                    "index": ""
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
                    "index": ""
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
                    "index": ""
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
            ]
        },

        

    }),
    actions: {

        getApi() {
            return 'https://script.google.com/macros/s/AKfycbw3gxXz6BBLmAGsdMVB9IhlUpg1Me1H2i3f-H1cpiZUwPbTZsJmQWf1CbfYcXHt5k0F/exec'
        },

    }
})