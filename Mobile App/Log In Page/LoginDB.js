import axios from "axios";
import React, { useState, useEffect } from 'react';


const MongodbBackendLogin = () => {

    const [documentsValue, setDocumentsValue] = useState("");



// MongoDB API Call


//setInterval(() => {

var axios = require('axios');
var data = {
    "collection": "new",
    "database": "new",
    "dataSource": "IOT",
    "projection": {
        "_id": 203254,
        "humidity": 8,
        "StringDocuments": 192

        

    }
};
           
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-jlyty/endpoint/data/v1/action/findOne',
    headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': "DZeFgyc9pRqHawEBdfMq4MtYJDdEOQNRUi3m28gzxJAonJrE4ipMQ83m26pSUyWS",
    },
    data: data
};

useEffect(()=>{

axios(config)
    .then(function (response) {
        //console.log(JSON.stringify(response.data));
        var value = response.data
        var { document : {StringDocuments}} = value
        
        
        setDocumentsValue(StringDocuments)
        console.log(StringDocuments)

    })
    .catch(function (error) {
        console.log(error);
    });


},[]);

//let tempdata = tempValue;
//let humiditydata = humidity;

return(documentsValue);

    
}
  export default MongodbBackendLogin