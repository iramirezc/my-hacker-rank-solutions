n = int(raw_input())
my_array = map(int, raw_input().split()) # Alternative: my_array = [int(n) for n in raw_input().split()]
print sum(my_array)