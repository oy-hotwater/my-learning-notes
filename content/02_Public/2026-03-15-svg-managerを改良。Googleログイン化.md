- [Firestore](Firestore.md)のAuthにより仮で匿名認証だった部分をGoogleアカウントによる認証へ変更

- FirestoreでのRuleにより、「私のみ」がサービスを利用できるように設定
```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/svgs/{document=**} {
      // 1. 認証済みであること
      // 2. 指定した自分自身のUIDと完全に一致すること
      // 3. リクエスト先のパスが自身のuserIdと一致すること
      allow read, write: if request.auth != null
                          && request.auth.uid == "ここに自身のFirebase Auth UIDを記述"
                          && request.auth.uid == userId;
    }
  }
}
```

- Firebaseの[[API]]キーは漏れること前提らしいので、ここでセキュリティを担保
	- デベロッパーツールのNetworkから確認できるらしい（なお、Networkのどこに書かれているのか見つけられなかった。公開する予定はないので一旦良い）

- Date.now()によるエラーも対処。Firebase由来の時間計測関数へ置き換えた。