class Node:
    def __init__(self,item=None,left=None,right=None):
        self.left=left
        self.right=right
        self.item=item
class tree:
    def __init__(self):
        self.root=None
    def insertion(self,data):
        self.root=self.rinsert(self.root,data)
    def rinsert(self,root,data):
        if root is None:
            return Node(data)
        if data<root.item:
            root.left=self.rinsert(root.left,data)
        elif data>root.item:
            root.right=self.rinsert(root.right,data)
        return root
    def search(self,data):
        self.rsearch(self.root,data)
    def rsearch(self,root,data):
        if root is None or root.item==data:
            return root
        if data<root.item:
            self.rsearch(root.left,data)
            return root
        if data>root.item:
            self.rsearch(root.right,data)
            return root
    def inorder(self):
        result=[]
        self.rinorder(self.root,result)
        return result
    def rinorder(self,root,result):
        if root is None:
            return root
        self.rinorder(root.left,result)
        result.append(root.item)
        self.rinorder(root.right,result)
    def min_value(self,temp):
        current=temp
        while current.left is not None:
            current=current.left
        return current.item
    def max_val(self,temp):
        current=temp
        while temp.right is not None:
            current=current.left
        return current.item
    def delete(self,data):
        self.root=self.rdelete(self.root,data)
    def rdelete(self,root,data):
        if root is None:
            return root
        if data>root.item:
            root.right=self.rdelete(root.right,data)
        if data<root.item:
            root.left=self.rdelete(root.left,data)
        else:
             if root.left is None:
                 
                 return root.right
             elif root.right is None:
                 return root.left
            
             root.item=self.min_value(root.right)
             self.rdelete(root.right,root.item)    
        return root



  
        
        
obj1=tree()
obj1.insertion(50)
obj1.insertion(30)
obj1.insertion(80)
obj1.insertion(10)
obj1.insertion(40)
obj1.insertion(70)
obj1.insertion(100)
obj1.insertion(90)
obj1.insertion(120)
print(obj1.inorder())
obj1.delete(80)
print(obj1.inorder())


    
      