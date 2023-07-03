import paho.mqtt.client as mqtt
from dotenv import dotenv_values

env_vars = dotenv_values()

host = env_vars["hostName"]
port = env_vars["port"]

broker_url = host
broker_port = int(port)


def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connected to MQTT broker")
    else:
        print(f"Failed to connect, return code: {rc}")

def on_publish(client, userdata, mid):
    print("Message published")


def on_disconnect(client, userdata, rc):
    print("Disconnected from MQTT broker")


client = mqtt.Client()

client.on_connect = on_connect
client.on_publish = on_publish
client.on_disconnect = on_disconnect

client.connect(broker_url, broker_port)

case = True

topic = input("Input your topic: ")
while case:
    message = input("Input your message: ")
    if message == "quit":
        case = False
    else:
        client.publish(topic, message)

client.disconnect()
