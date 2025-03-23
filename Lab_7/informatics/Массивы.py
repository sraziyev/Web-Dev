# #a
n = int(input())
arr = list(map(int, input().split()))
for i in range(n):
    if i % 2 == 0:
        print(arr[i], end=' ')

# #b
n = int(input())
arr = list(map(int, input().split()))
for x in arr:
    if x % 2 == 0:
        print(x, end=' ')

# #c
n = int(input())
arr = list(map(int, input().split()))
count = 0
for i in range(1, n):
    if arr[i] > arr[i - 1]:
        count += 1
print(count)

# #d
n = int(input())
arr = list(map(int, input().split()))
for i in range(1, n):
    if (arr[i] > 0 and arr[i - 1] > 0) or (arr[i] < 0 and arr[i - 1] < 0):
        print("YES")
        break
else:
    print("NO")

# #e
n = int(input())
arr = list(map(int, input().split()))
count = 0
for i in range(1, n - 1):
    if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
        count += 1
print(count)

# #f
n = int(input())
arr = list(map(int, input().split()))
for i in range(n // 2):
    arr[i], arr[n - 1 - i] = arr[n - 1 - i], arr[i]
for x in arr:
    print(x, end=' ')
