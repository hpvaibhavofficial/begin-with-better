#include<bits/stdc++.h>
using namespace std;

bool findBipartite(int src, vector<int> &color, vector<vector<int>> &adj) {
    queue<int> q;
    q.push(src);
    color[src] = 0;

    while (!q.empty()) {
        int node = q.front();
        q.pop();

        for (int neighbor : adj[node]) {
            if (color[neighbor] == -1) {
                color[neighbor] = 1 - color[node];
                q.push(neighbor);
            } else if (color[neighbor] == color[node]) {
                return false;
            }
        }
    }
    return true;
}

int main() {
    int n, m;
    cin >> n >> m;

    vector<vector<int>> adj(n);
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    vector<int> color(n, -1);
    bool isBipartite = true;

    for (int i = 0; i < n; i++) {
        if (color[i] == -1) {
            if (!findBipartite(i, color, adj)) {
                isBipartite = false;
                break;
            }
        }
    }

    if (isBipartite) {
        cout << "The graph is bipartite." << endl;
    } else {
        cout << "The graph is not bipartite." << endl;
    }

    return 0;               
}
    