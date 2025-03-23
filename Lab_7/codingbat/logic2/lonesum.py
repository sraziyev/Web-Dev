def lone_sum(a, b, c):
    return (a if a != b and a != c else 0) + (b if b != a and b != c else 0) + (c if c != a and c != b else 0)
