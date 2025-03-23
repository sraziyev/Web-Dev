# #a
a = int(input())
b = int(input())
if a >= b:
    print(a)
else:
    print(b)

# #b
year = int(input())
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")

# #c
correct = int(input())
student = int(input())
if (correct == 1 and student == 1) or (correct != 1 and student != 1):
    print("YES")
else:
    print("NO")

# #d
a = int(input())
if a > 0:
    print(1)
elif a == 0:
    print(0)
else:
    print(-1)

# #e
a = int(input())
b = int(input())
if a > b:
    print(1)
elif a == b:
    print(0)
else:
    print(2)
