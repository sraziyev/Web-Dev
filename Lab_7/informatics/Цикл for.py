# #a
a = int(input())
b = int(input())
for i in range(a, b + 1):
    if i % 2 == 0:
        print(i, end=" ")

# #b
a = int(input())
b = int(input())
c = int(input())
d = int(input())
for i in range(a, b + 1):
    if i % d == c:
        print(i, end=" ")

# #c
import math
a = int(input())
b = int(input())
i = math.ceil(math.sqrt(a))
while i * i <= b:
    print(i * i, end=' ')
    i += 1

# #d
x = input()
d = input()
count = 0
for digit in x:
    if digit == d:
        count += 1
print(count)

# #e
x = input()
total = 0
for digit in x:
    total += int(digit)
print(total)

# #f
x = int(input())
while x % 10 == 0:
    x //= 10
while x > 0:
    print(x % 10, end='')
    x //= 10

# #g
x = int(input())
for i in range(2, x + 1):
    if x % i == 0:
        print(i)
        break

# #h
x = int(input())
for i in range(1, x + 1):
    if x % i == 0:
        print(i, end=' ')

# #i
x = int(input())
count = 0
for i in range(1, x + 1):
    if x % i == 0:
        count += 1
print(count)

# #j
total = 0
for i in range(100):
    total += int(input())
print(total)

# #k
n = int(input())
total = 0
for i in range(n):
    total += int(input())
print(total)

# #l
binary = input()
decimal = 0
power = 0
for digit in reversed(binary):
    decimal += int(digit) * (2 ** power)
    power += 1
print(decimal)

# #m
n = int(input())
count = 0
for i in range(n):
    num = int(input())
    if num == 0:
        count += 1
print(count)
