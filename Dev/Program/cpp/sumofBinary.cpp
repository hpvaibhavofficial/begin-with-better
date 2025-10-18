#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin >> n;
    int s = 0;
    int c = n;
    while (n > 0)
    {

        int rem = n % 2;
        s += rem;
        n = n / 2;
    }
    cout << s;
}