#%%
from itertools import combinations
from functools import reduce
import operator
import json

jsonFile = open('input.json')
data = json.load(jsonFile)["input"]

testInputs = [1,2,3,4]

def find2020Combinations(inputs, nbOfCombinations ):
  createdCombinations = combinations(inputs, nbOfCombinations)
  for element in createdCombinations:
    if sum(element) == 2020:
      return reduce(operator.mul, element,1)


print(find2020Combinations(data, 3))
# %%
