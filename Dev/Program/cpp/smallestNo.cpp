#include <bits/stdc++.h>
using namespace std;

int main()
{
    int arr[] = {1, 2, 3, 4, 6};
    int minn = INT_MAX;
    for (int x : arr)
    {
        if (x < minn)
        {
            minn = x;
        }
    }
    cout << minn;
}
