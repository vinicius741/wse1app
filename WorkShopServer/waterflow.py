from sqlalchemy import create_engine
from time import sleep
from threading import Thread

# Conexão com a base de dados SQLite
db_connect = create_engine('sqlite:///chinook.db')

# Recebe os dados enviados pelo NodeMCU
def receiveFromMCU():
    
    while True

        # Receber leitura do NodeMCU
        # Armazenar na base de dados SQLite
        pass


# Processa e envia os dados para o Firebase
def sendToFirebase():

    while True

        # Ler base de dados SQLite
        # Tirar a média de consumo do último minuto
        # Determinar se o fluxo é alto, médio ou nenhum
        # Formatar informações
        # Enviar para base de dados Firebase
        pass

    pass

# Entry point
if __name__ == '__main__':

    print ('Registrando Threads ....') 
    sleep(1)

    receiveFromMCUThread = Thread(target = receiveFromMCU)
    sendToFirebaseThread = Thread(target = sendToFirebase)

    print ('Disparando Threads ....')
    sleep(1)

    receiveFromMCUThread.start()
    sendToFirebaseThread.start()

#     def get(self):

#         conn = db_connect.connect() # connect to database
#         query = conn.execute("select * from readings") # This line performs query and returns json result
#         result = {'readings': [dict(zip(tuple (query.keys()) ,i)) for i in query.cursor]}

#         return dumps(result)