#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
#include <FlowMeter.h>
     
const char* ssid     = "AP";
const char* password = "10203040";     
int port = 555;
char * ip = "192.168.43.34";

int pin = D1;

const unsigned long period = 1000;
FlowMeter fm = FlowMeter(pin);

WiFiUDP udp;


double myvalue = 0;

int wifiStatus;

void setup() {

    pinMode(pin, INPUT);

    Serial.begin(115200);
    delay(200);

    // We start by connecting to a WiFi network
    Serial.println();
    Serial.println();
    Serial.print("Your are connecting to; ");
    Serial.println(ssid);

    WiFi.mode(WIFI_STA);
    udp.begin(port);

    // Inicializa o sensor de fluxo
    pinMode(pin, INPUT);
    attachInterrupt(pin, MeterISR, RISING);
    fm.reset();
}   

void MeterISR()
{
    fm.count();
}
     
void loop() {

    do_sensor();
    do_connect();
    do_send();

    Serial.println("");
    Serial.print("My value: ");
    Serial.println(myvalue);
}

void do_sensor() 
{
    delay(period);
    fm.tick(period);
    myvalue = fm.getCurrentFlowrate();
}

void do_connect() {

    wifiStatus = WiFi.status();

    if(wifiStatus == WL_CONNECTED) {

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

void do_send() {

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