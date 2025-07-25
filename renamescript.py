import os
path = '/Users/lydiatan/Documents/code/atlas/Atlas_Rouge_Park/images/markers/Icons'
for filename in os.listdir(path):
    #print(filename)
    os.rename(os.path.join(path,filename),os.path.join(path, filename.replace(' ', '_').lower())) 