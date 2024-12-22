element = [
        { 'name': 'vedanth',   'age': 17, 'time_hours': 1},
        { 'name': 'rajab', 'age': 12,  'time_hours': 3},
        { 'name': 'vignesh',  'age': 21,  'time_hours': 2.5},
        { 'name': 'chinmay',  'age': 24,  'time_hours': 1.5},
    ]
print("before sorted the list",element)
i=0

n=len(element)-1
print(n)
while i<n-1:
    j=0
    while  j<n:
        if element[j]["time_hours"]>element[j+1]["time_hours"]:
            element[j],element[j+1]=element[j+1],element[j]
        j+=1
    i+=1
print("after sorted the list",element)