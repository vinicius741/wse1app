#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
#include <FlowMeter.h>

const unsigned long period = 1000;

int port = 555;
int wifiStatus;

char* ssid     = "WiFi-Repeater";
char* password = "10203040";     
char * ip = "192.168.1.8";

FlowMeter fm = FlowMeter(D0);
WiFiUDP udp;

void MeterISR();
void setup();
void loop();
double do_sensor();
void do_connect();
void do_send(double);

void MeterISR()
{
    fm.count();
}

void setup() {

    // Inicializa a porta serial
    Serial.begin(115200);
    delay(200);

    // Inicializa o sensor de fluxo
    attachInterrupt(D0, MeterISR, RISING);
    fm.reset();

    // Inicializa conexão com WiFi
    Serial.println();
    Serial.println();
    Serial.print("Your are connecting to; ");
    Serial.println(ssid);
    WiFi.mode(WIFI_STA);
    udp.begin(port);
}   
     
void loop() {

    double value = do_sensor();
    do_connect();
    do_send(value);

    Serial.println("");
    Serial.print("My value: ");
    Serial.println(value);
}

double do_sensor() 
{
    fm.tick(period);
    return fm.getCurrentFlowrate();
}

void do_connect() {

    wifiStatus = WiFi.status();

    if(wifiStatus == WL_CONNECTED) {

        //Serial.println("");
        //Serial.println("Your ESP is connected!");  
        Serial.println("Your IP address is: ");
        Serial.println(WiFi.localIP());  

        delay(100);
    }
    else {
        Serial.println("");
        Serial.println("WiFi not connected, trying again ...");
        WiFi.begin(ssid, password);
        delay(1000);
    }

    delay(1000);
}

void do_send(double myvalue) {

    if (wifiStatus == WL_CONNECTED) {

        udp.beginPacket(ip, port);
        udp.println(myvalue);
        udp.endPacket();

        Serial.print("Sending: ");
        Serial.println(myvalue);

        delay(5);
    }
    else {
        Serial.println("Connection failed");
        delay(150);
    }
}

