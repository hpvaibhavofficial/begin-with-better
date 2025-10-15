#include <bits/stdc++.h>
using namespace std;

int main()
{
    int arr[] = {1, 2, 4, 5, 6};
    unordered_set<int> st;
    for (int c : arr)
    {
        st.insert(c);
    }
    cout << st.size();
}