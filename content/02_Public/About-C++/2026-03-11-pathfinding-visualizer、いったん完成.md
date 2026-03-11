- 以下を目的とするプログラムをひとまず完成とする
	- C++の特徴である処理速度の高さを活かし、複数のアルゴリズムを比較。
	- ChatGPT5.4を使用することで、体験しながらC++を学習
- [Docker](Docker.md)を使っての初めてのプログラムだった。Dockerに慣れ、最低限の動かし方は理解できた
- AIにより完成した成果物をもとに、詳細なところまで見ることでC++の学習を進める

- Dockerでbuild＆runで実行
- マウントすることでDocker内で消える出力を、ローカルに残す
```
docker build -t pathfinding-visualizer .
docker run --rm -v "${PWD}/logs:/app/logs" pathfinding-visualizer /app/data/sample_map.txt compare
```

- 以下は実行結果。
- また、三つのアルゴリズムによる経路探索の途中経過ログは別ファイルとして出力される仕組みになっている。
```

Algorithm   Found       Visited Nodes   Path Length   Time (ms)     
--------------------------------------------------------------------
bfs         yes         40              16            1.288
dijkstra    yes         40              16            0.790
astar       yes         20              16            0.196

Fastest on this run: astar

Path preview (fastest result):
S**.#.....
##*#.#.###
..*#.#...#
.#*..###.#
.#*###...#
.#*****#.#
.#####*#.#
.....#***G

Trace files:
  bfs      : "/app/logs/bfs_trace.txt"
  dijkstra : "/app/logs/dijkstra_trace.txt"
  astar    : "/app/logs/astar_trace.txt"
```