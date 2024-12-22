def merg_sort(lst):
    if len(lst) <= 1:
        # print(len(lst))
        return lst
    mid = len(lst) // 2
    left_part = lst[:mid]
    right_part = lst[mid:]
    left_list =merg_sort(left_part)
    right_list = merg_sort(right_part)
    return partition(left_list, right_list)

def partition(left, right):
    print("left is",left)
    print("right",right)
    sorted_list = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            sorted_list.append(left[i])
            i += 1
        else:
            sorted_list.append(right[j])
            j += 1
    sorted_list.extend(left[i:])
    sorted_list.extend(right[j:])
    return sorted_list

arr1 = [4, 5, 3, 2, 7, 1, 10]
print(merg_sort(arr1))


