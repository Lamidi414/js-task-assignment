import shutil
import os

# Loop 7 times: from 1 up to (but not including) 8
for i in range(2, 10):
    source = 'task01.js'
    destination = f'task{i:02}.js'
    
    # Copy the file
    shutil.copyfile(source, destination)
    
    print(f"Created copy: {destination}")