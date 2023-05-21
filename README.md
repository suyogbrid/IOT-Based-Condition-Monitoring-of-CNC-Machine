# IOT-Based-Condition-Monitoring-of-CNC-Machine
BE-Project



Hydraulic Temperature:- Too hot of temperature places stress on the internal components and can lead to your hydraulic system's failure. Low temperatures will increase the viscosity of hydraulic fluid and oil, which means that it will behave as a thicker fluid. 

Temperature & Humidity of electrical panel:- The cost of electrical equipment of CNC machine is very high because of very high and low temperature of panel electrical equipment get permanently damage it will increase machine down time. 



operation:-

1. we used node-red this node-red application install on Rpi. this node-red gives interactive Dashboard for monitoring.
2. You can aceess that dashboard using local IP of Rpi you also need to add port number example- 192.168.10.1:1880(Node-red config) and 192.168.10.1:1880/ui(Node-red Dashboard)
3. we use mongoDB to store the data and build one mobile application to monitor parameters of machine through mobile.
4. To access the node-red dashboard from anywhere we deply this node-red on aws fro detail description read AWS document file.
5. thsi project provide email alert to the user if any dangerous situation couure.
6. this project also log the data into csv file that you can also download in your local machone.
7. To control Temperature of electrical Panel we placed Lamp(tungsten lamp) in the Panel tha can warm the panel and control the temperature of the panel if temperature gose below the define range.


Please Refere Project Report
