#include <iostream>
using namespace std;
int main()
{
    int n;
    cin >> n;
    int mod = 1000000007;
    long sum = ((n * (n + 1)) / 2) + 1;
    int um = mod % sum;
    cout << sum;
}