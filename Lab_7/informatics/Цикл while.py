# #a
n = int(input())
i = 1
while i * i <= n:
    print(i * i)
    i += 1

# #b
n = int(input())
i = 2
while i <= n:
    if n % i == 0:
        print(i)
        break
    i += 1

# #c
n = int(input())
power = 1
while power <= n:
    print(power, end=' ')
    power *= 2

# #d
n = int(input())
power = 1
while power < n:
    power *= 2
if power == n:
    print("YES")
else:
    print("NO")

# #e
n = int(input())
k = 0
power = 1
while power < n:
    power *= 2
    k += 1
print(k)
