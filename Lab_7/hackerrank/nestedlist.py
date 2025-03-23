n = int(input()) 
students = [] 

for _ in range(n):
    name = input()
    grade = float(input())
    students.append([name, grade])

unique_grades = sorted(set(grade for _, grade in students))

second_lowest = unique_grades[1]

second_lowest_students = sorted([name for name, grade in students if grade == second_lowest])

for student in second_lowest_students:
    print(student)
