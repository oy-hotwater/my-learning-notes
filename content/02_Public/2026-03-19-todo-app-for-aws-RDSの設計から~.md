[[todo-app-for-aws]]

## Step3: [[RDS]]の設定
#### Step 3「データベースのセキュアな配置 (Amazon RDS)」の構築
1. EC2用セキュリティグループの作成 (事前準備)
2. RDS用セキュリティグループの作成
3. DBサブネットグループの作成
4. Amazon RDS インスタンスの構築

## Step4: Webサーバーの構築とアプリのデプロイ (Amazon EC2)
1. ネットワークアウトバウンド経路の確保 (NAT Gatewayの構築)
   プライベートとパブリックをつなげてもいいように(?)、[[NATゲートウェイ]]を挟む
2. セキュリティグループの更新
3. Node.jsとGitの導入
	1. Systems Managerで操作
	2. git cloneでリポジトリから持ってきた
4. アプリのデプロイと永続化
	1. Systems Managerで操作
	2. 終了してもバックグラウンドで動き続けるようにする

## AWS 可用性とセキュリティの向上 (Step 5)
1. セキュリティグループの作成と更新
	1. ALB用セキュリティグループの作成
	2. EC2用セキュリティグループの更新
2. ターゲットグループの作成
3. Application Load Balancer (ALB) の構築
4. SSL/TLS 証明書の取得 (ACM=AWS Certificate Manager)
	1. [[AWS-Certificate-Manager]]
5. ×　HTTPSの有効化およびRoute 53のルーティング設定　→　Route 53は多めの費用がかかる
	1. ALBへのHTTPSリスナー追加
	2. HTTP通信の強制リダイレクト化