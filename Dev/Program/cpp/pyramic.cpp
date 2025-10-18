#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n = 3;
    int sum = 0;
    for (int i = 1; i <= n; i++)
    {
        if (i == n)
        {
            sum += (3 * i) - i;
        }
        else
        {
            sum += 3 * i;
        }
    }
    cout << sum;
}