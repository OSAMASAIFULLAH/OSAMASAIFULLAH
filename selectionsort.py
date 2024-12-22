list=[7,12,4,9,11,3]
i=0
j=0
while i<len(list):
    for j in range(i+1,len(list)):
        if list[j]<list[i]:
            list[i],list[j]=list[j],list[i]
        j+=1
    i+=1
print("sorted array",list)
    
    