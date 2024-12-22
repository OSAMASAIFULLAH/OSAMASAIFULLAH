# def fibonacci(n, memo={}):
#     # if n in memo:
#     #     return memo[n]
#     if n <= 1:
#         return n
#     memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
#     print("the memo is",memo)
#     return memo[n]

# # Print the first 10 Fibonacci numbers
# for i in range(10):
#     print(fibonacci(i))
def fibo(n):
    print("the n is",n)
    if n==0:
        return 0
    elif n==1:
        return 1
    else:
        return fibo(n-1)+fibo(n-2)
print("fibi in",fibo(4))
