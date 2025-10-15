#include <algorithm>
#include <iostream>

using namespace std;

int main()
{
    int arr[] = {11, 24, 21, 34, 10, 8};
    int n = sizeof(arr) / sizeof(arr[0]);
    int first = 0;
    int sec = 0;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] > first)
        {
            sec = first;
            first = arr[i];
        }
        else if (arr[i] > sec)
        {
            sec = arr[i];
        }
    }
    cout << "sum of largest pair is : " << first + sec;
}