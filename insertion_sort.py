list=[7,6,9,11,12,10,15,5]
n=len(list)-1

for i in range(n):
    j=i+1
    while j!=0:
        if list[j]<list[j-1]:
            list[j],list[j-1]=list[j-1],list[j]
            j-=1
        else:
            break
        
        
print("the sorted list are",list)