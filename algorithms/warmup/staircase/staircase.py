# Enter your code here. Read input from STDIN. Print output to STDOUT
num_stairs = int(raw_input())
for i in range(1, num_stairs + 1):
    print " " * (num_stairs - i) + "#" * i