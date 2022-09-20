import random


answer = (random.randrange(0, 10))

print(f'"MAGIC 8-BALL:')

if (answer == 0):
    print("It is certain.")
elif (answer == 1):
    print("As I see it, yes.")
elif (answer == 2):
    print("Without a doubt.")
elif (answer == 3):
    print("Outlook good.")
elif (answer == 4):
    print("Yes definitely.")
elif (answer == 5):
    print("Ask again later.")
elif (answer == 6):
    print("Cannot predict now.")
elif (answer == 7):
    print("Reply hazy, try again.")
elif (answer == 8):
    print("My reply is no.")
else:
    print("Very doubtful.")
