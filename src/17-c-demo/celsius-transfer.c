#include "stdio.h"

int main() {
    float celsius, fahr;
    float lower, upper, step;

    lower = -17.8;
    upper = 148.9;
    step = 20;

    celsius = lower;
    while (celsius <= upper) {
        fahr = celsius * 9.0 / 5.0 + 32.0;
        printf("%6.1f %6.0f\n", celsius, fahr);
        celsius += step;
    }
}