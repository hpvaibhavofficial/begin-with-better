#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> vec = {13, 10, 9, 6, 21, 15, 14};
    int c = 0;
    for (int i = 0; i < vec.size() - 1; i++)
    {
        for (int j = 0; j < vec.size(); j++)
        {
            if (i < j && vec[i] > vec[j])
                c++;
        }
    }
    cout << c;
}