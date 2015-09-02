import sys

record = []
if len(sys.argv) > 1:
	for ele in sys.argv[1:]:
		record.append(ele)

name, eamil, *numbers = record
print(numbers)