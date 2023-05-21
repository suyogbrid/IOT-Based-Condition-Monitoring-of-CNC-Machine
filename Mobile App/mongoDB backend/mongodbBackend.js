import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MongodbBackend = () => {
  const [documentsValue, setDocumentsValue] = useState("");
  const [delayValue, setDelayValue] = useState(10000);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = {
          "collection": "new",
          "database": "new",
          "dataSource": "IOT",
          "projection": {
              "_id": 203254,
              "StringDocuments": 192
          }
        };

        const config = {
          method: 'post',
          url: 'https://data.mongodb-api.com/app/data-jlyty/endpoint/data/v1/action/findOne',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': "DZeFgyc9pRqHawEBdfMq4MtYJDdEOQNRUi3m28gzxJAonJrE4ipMQ83m26pSUyWS",
          },
          data: data
        };

        const response = await axios(config);
        const { document : {StringDocuments}} = response.data;
        console.log(delayValue);

        setDocumentsValue(StringDocuments);
        setDelayValue(parseInt(StringDocuments.split(";")[21])); // update interval time after the first successful fetch
      } catch (error) {
        console.error(error);
      }
    };

    const intervalId = setInterval(fetchData, delayValue);

    return () => clearInterval(intervalId);
  }, [delayValue]);

  return documentsValue;
};

export default MongodbBackend;