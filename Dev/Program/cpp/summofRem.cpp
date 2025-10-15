#include <bits/stdc++.h>
using namespace std;

void findRemSum(int n, int d)
{
    int sum = 0;
    for (int i = 0; i < n; i++)
    {
        sum += i % d;
    }
    cout << sum;
}
int main()
{
    findRemSum(12, 4);
}