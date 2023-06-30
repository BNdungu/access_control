from machine import Pin 
import network
from rfid import MFRC522  
from time import sleep
import credentials
import json
from umqtt.simple import MQTTClient

wlan = network.WLAN(network.STA_IF)
wlan.active(True)

if wlan.isconnected == False:
    import wifi

host = credentials.hostname
client_id = credentials.client_id
global client


reader = MFRC522(spi_id=0,sck=2,miso=4,mosi=3,cs=1,rst=0)
lock = Pin(15, Pin.OUT)

print('Bring you card closer...')

def connect():
    try:
        global client
        client = MQTTClient(client_id = client_id,
                            server = host,
                            port = 1883,
                            keepalive = 3600
                            )
        print('connecting to the mqtt broker')
        client.connect()
        print(f'Connected to broker @: {host}')
        return client
    
    except Exception as err:
        print(err)



 
def rfid():
    global client
    client.subscribe('responce')
    reader.init()
    (stat, tag_type) = reader.request(reader.REQIDL)
    if stat == reader.OK:
        (stat, uid) = reader.SelectTagSN()
        if stat == reader.OK:
            card = int.from_bytes(bytes(uid),"little",False)
            print("CARD ID: "+str(card))
            card = str(card)
            
            data = {
                "id": card
                }
        
            data = json.dumps(data)
            client.publish('ping',data)
            
            sleep(.5)
            
def msg_callback(topic,message):
    global msg
    msg = message.decode('utf-8')
    print(message.decode('utf-8'))
    
    if msg == 'valid':
        lock.on()
        sleep(1)
        lock.off()
        msg != 'valid'
    


connect()
client.set_callback(msg_callback)

sleep(2)


while True:
    rfid()

