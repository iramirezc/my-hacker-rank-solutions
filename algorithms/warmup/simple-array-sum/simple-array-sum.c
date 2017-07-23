#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    int n;
    scanf("%d", &n);
    int my_array[n];
    int i, sum = 0;
    for (i=0;i<n;i++){
        scanf("%d", &my_array[i]);
        sum += my_array[i];
    }
    printf("%d", sum);
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    return 0;
}
