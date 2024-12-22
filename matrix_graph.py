class graph:
    def __init__(self,vno):
        self.ver_count=vno
        self.vertix_count=[[0]*vno for i in range(self.ver_count)]
    def edge(self,u,v,weight=1):
        if 0<=u<=self.ver_count and 0<=v<=self.ver_count:
            self.vertix_count[u][v]=weight
            self.vertix_count[v][u]=weight
    def remove_edge(self,u,v):
        if 0<=u<=self.ver_count and 0<=v<=self.ver_count:
            self.vertix_count[u][v]=0
            self.vertix_count[v][u]=0
    def has_edge(self,u,v):
        return self.vertix_count[u][v]!=0
    def print_graph(self):
        for row in self.vertix_count:
            l=" ".join(map(str,row))
            print(l)
            
G=graph(5)
G.edge(0,1)
G.edge(0,2)
G.edge(1,4)
G.edge(4,3)
G.edge(2,3)

print(G.has_edge(1,1))
G.print_graph()