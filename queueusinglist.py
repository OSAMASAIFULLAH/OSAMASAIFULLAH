class Queue:
    def __init__(self):
        self.list=[]
    def is_empty(self):
        return len(self.list)==None
    def enqueue(self,data):
        self.list.append(data)
    def dequeue(self):
        if not self.is_empty():
            delet_item=self.list.pop(0)
            return delet_item
    def front(self):
        if not self.is_empty():
            front_element=self.list[0]
            print(front_element)
    def rear(self):
        if not self.is_empty():
            rear_element=self.list[-1]
            print(rear_element)
    def size_of_list(self):
       print(len(self.list))
obj=Queue()
obj.enqueue(6)
obj.enqueue(7)
obj.enqueue(8)
obj.enqueue(9)
obj.enqueue(10)
obj.dequeue()
obj.front()
obj.rear()
obj.size_of_list()