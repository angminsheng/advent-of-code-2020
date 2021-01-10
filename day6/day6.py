f = open('input.txt', 'r')

content = f.read()

inputs = content.split("\n\n")

counterOne = 0
counterTwo = 0
counterThree = 0

for input in inputs:
  counterOne += len(set(input.replace("\n", "")))
  # * is a spread operator
  counterTwo += len(set.intersection(*map(set, input.split())))

  sum = []
  for i in input.split():
    sum.append(set(i))
  counterThree += len(set.intersection(*map(set, input.split())))
  counterTwo += len(set.intersection(*sum))

print(counterOne, counterTwo, counterThree)
