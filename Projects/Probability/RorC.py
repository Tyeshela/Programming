from random import randint

def RorC():
    Rainy = randint(0, 1)
    Cloudy = randint(0, 1)
    if Rainy == 0 and Cloudy == 0:
        print(False)
    else:
        print(True)

RorC()
