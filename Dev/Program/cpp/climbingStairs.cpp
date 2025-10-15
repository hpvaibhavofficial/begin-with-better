#include <bits/stdc++.h>
using namespace std;

int main()
{
    int ss, js;
    cin >> ss >> js;
    int step = ss / js;
    int mod = ss % js;
    cout << step + mod;
}
