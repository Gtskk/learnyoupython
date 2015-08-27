from collections import OrderedDict
d = OrderedDict()
d['foo'] = 1
d['bar'] = 2
d['yes'] = 3
d['no'] = 4
for key in d:
	print(key, d[key])
