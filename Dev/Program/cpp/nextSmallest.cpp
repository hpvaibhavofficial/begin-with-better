#include <bits/stdc++.h>
using namespace std;

int main()
{
    int arr[] = {3, 2, 11, 7, 6, 5, 6, 1};
    int n = 8;
    int ans[n];
    for (int i = 0; i < n; i++)
    {
        ans[i] = -1;
        for (int j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[i])
            {
                ans[i] = arr[j];
                break;
            }
        }
    }
    for (int x : ans)
    {
        cout << x << " ";
    }
}