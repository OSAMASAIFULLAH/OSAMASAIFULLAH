def recurtion(item):
    if (item<=1):
        return item
    x=recurtion(item-1)
    return item
item=7
print(recurtion(item))

    

