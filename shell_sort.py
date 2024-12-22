# def sell_sort(list):
#     n=len(list)-1
#     gap=n//2
#     i1=0
#     while gap!=1:
#         while gap!=n+1 and i1!=gap+1:
#             if list[i1]>list[gap]:
#                 list[i1],list[gap]=list[gap],list[i1]
#             gap+=1
#             i1+=1
#         gap=gap//2
#     for i in range(1, n):
#         j = i
#         while j > 0 and list[j] < list[j - 1]:
#             list[j], list[j - 1] = list[j - 1], list[j]
#             j -= 1 
            
            

# list=[64,34,25,12,11,90,5]
# print("the original list are",list)
# sell_sort(list)
# print("the sorted list are",list)
# n=5
# j=1
# while j!=n+1:
#     print(j)
#     j+=1
def sell_sort(lst):
    n = len(lst)
    gap = n // 2
    
    while gap > 0:
        for i in range(gap, n):
            temp = lst[i]
            j = i
            while j >= gap and lst[j - gap] > temp:
                print("the value of j is",j)
                lst[j] = lst[j - gap]
                j -= gap
            lst[j] = temp
        gap //= 2  # Reduce the gap size

lst = [77, 62, 14, 9, 30, 21, 80]
print("The original list is:", lst)
sell_sort(lst)
print("The sorted list is:", lst)
