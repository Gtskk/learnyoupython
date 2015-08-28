from calendar import month_abbr
import re, sys

datepat = re.compile(r'(\d+)/(\d+)/(\d+)')
text = sys.argv[1]

def change_date(m):
	mon_name = month_abbr[int(m.group(1))]
	return '{} {} {}'.format(m.group(2), mon_name, m.group(3))

print(datepat.sub(change_date, text))