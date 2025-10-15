#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cout << "Enter the number of elements: ";
    cin >> n;
    if (n < 2)
    {
        cout << "No second largest element" << endl;
        return 0;
    }

    vector<int> vec(n);
    for (int i = 0; i < n; i++)
    {
        cin >> vec[i];
    }

    int maxx = vec[0];
    int smax = INT_MIN;

    for (int i = 0; i < n; i++)
    {
        if (vec[i] > maxx)
        {
            smax = maxx;
            maxx = vec[i];
        }
        if (vec[i] < maxx && vec[i] > smax)
        {
            smax = vec[i];
        }
    }
    cout << "Second Largest is : " << (smax != INT_MIN ? to_string(smax) : "Not found");
}
