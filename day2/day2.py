import re

f = open('input.txt', 'r')

content = f.read()

inputs = content.split('\n')


def getParameters(input):
  pattern = re.compile(r"^(?P<min>\d+)-(?P<max>\d+) (?P<char>.): (?P<password>.+)$")
  match = pattern.match(input)
  return [match.group("min"), match.group("max"), match.group("char"), match.group("password")]


def getFirstResult(inputs):
  count = 0

  for input in inputs:
    [min, max, char, password] = getParameters(input)
    nbOfAppearance = password.count(char)
    if(nbOfAppearance >= int(min) and nbOfAppearance <= int(max)):
      count+=1

  return count

def getSecondResult(inputs):
  count = 0

  for input in inputs:
    [first, second, char, password] = getParameters(input)
    firstPositionValid = password[int(first)-1] == char
    secondPositionValid = password[int(second)-1] == char
    if(firstPositionValid != secondPositionValid):
      count+=1

  return count

print(getSecondResult(inputs))
