def in1to10(n, outside_mode):
    return (1 <= n <= 10) if not outside_mode else (n <= 1 or n >= 10)
