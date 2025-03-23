# #a
def min_of_four(a, b, c, d):
    return min(min(a, b), min(c, d))

a, b, c, d = map(int, input().split())
print(min_of_four(a, b, c, d))

# #b
def power(a, n):
    result = 1.0
    for _ in range(n):
        result *= a
    return result

a, n = input().split()
a = float(a)
n = int(n)
print(power(a, n))

# #c
def xor(x, y):
    return (x and not y) or (not x and y)

x, y = map(int, input().split())
x = bool(x)
y = bool(y)
print(int(xor(x, y)))
