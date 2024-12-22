def Quick_sort(list):
    left=1
    right=len(list)-1
    loc=0
    if len(list)<=1:
        return list
    while left<=right:
        print("the left is",left)
        print("the right is",right)
        while list[loc]<list[right]:
            right-=1
        list[loc],list[right]=list[right],list[loc]
        loc=right
       
        while list[loc]>list[left]:
            left+=1
        list[loc],list[left]=list[left],list[loc]
        loc=left
        left+=1
    print("the loc is",loc)
    print(list)
    left_part=list[:loc]
    right_part=list[loc+1:]
    leftsort= Quick_sort(left_part)
    rightsort=Quick_sort(right_part)
    print("the list loc is",list[loc])
    return leftsort+[list[loc]]+rightsort
list=[58,90,55,25,40,64]
Quick_sort(list)

