from time import sleep
from ConnetionUDP import ConnetionUDP
from datetime import datetime
import random
from nap.url import Url

conn = ConnetionUDP(555)

lastDate = datetime.now()
currentDate = datetime.now()

sensorList = []

def do_all():
    
    while True:
        
        value = random.randint(0, 30)
        sensorList.append(float(value))
        currentDate = datetime.now()

        if ((currentDate - lastDate).minute() > 1) and len(sensorList) > 0:

            lastDate = currentDate

            somatorio = 0.0

            for x in sensorList:
                somatorio += x

            media = somatorio / len(sensorList)

            api = Url('https://api.github.com')

            response = gists.post(params={'since': '2014-05-01T00:00:00Z'})
            print(response.json())




if __name__ == '__main__':
    do_all()
