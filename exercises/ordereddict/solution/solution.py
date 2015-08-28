import sys
from collections import OrderedDict

d = OrderedDict()
record = []
if len(sys.argv) > 1:
	for ele in sys.argv[1:]:
		arr = ele.split(':')
		d[arr[0]] = arr[1]

for key in d:
	print(key, d[key])