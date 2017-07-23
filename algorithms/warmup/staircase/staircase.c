#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int my_str_repeat(char, int);

int main() {
    int num_stairs, i;
    scanf("%d", &num_stairs);
    for (i=1;i<num_stairs+1;i++){
        my_str_repeat(' ', num_stairs-i);
        my_str_repeat('#', i);
        printf("\n");
    }
    return 0;
}

int my_str_repeat(char c, int count){
    int i;
    for (i=0;i<count;i++){
        printf("%c", c);
    }
    return 0;
}