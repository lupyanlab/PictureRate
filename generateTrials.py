import glob
import os
import sys

try:
	dir_to_walk = sys.argv[1]
except:
	dir_to_walk = '.'

directories = [x[0] for x in os.walk(dir_to_walk)]


header = "picture_to_rate,choices,multiple_choices_allowed,randomize_choices,min_choice,max_choice"


options = "\"['large', 'small', 'rounded', 'spiky', 'intelligent', 'not intelligent', 'masculine', 'feminine', 'dominant', 'submissive']\""
directory = 'img'
multiple_choices_allowed = True
randomize_choices = False
min_choice = 1
max_choice = 5


for cur_directory in directories:

	f = open('trials/trials_'+os.path.split(cur_directory)[-1]+'.csv','w')
	f.write(header+'\n')

	images = glob.glob(os.path.join(cur_directory,'*png'))
	for cur_image in images:
		if 'cat' not in cur_image and 'dog' not in cur_image:
			image_path = '../'+os.path.join(directory, os.path.split(cur_directory)[-1], os.path.split(cur_image)[1])
			f.write(','.join(map(str,[image_path,options,multiple_choices_allowed,randomize_choices,min_choice,max_choice]))+'\n')
	f.close()