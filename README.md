# 空污污流流 - Taiwan PM2.5 IDW Diagram Map on Windyty

## 如何使用

### 手動執行
1. 打開 [Windy](https://windy.com)
2. 打開 console 執行以下程式碼：
```js
{const injection = document.createElement('script'); injection.src = 'https://meisheep.github.io/taiwan-pm2_5-idw-map-on-windyty/dist/bundle.js'; document.body.appendChild(injection);}
```
### 加入 Chrome 書籤
1. 新增一個 Chrome 書籤（Bookmark）
2. 名稱自訂，標籤貼上以下內容：
```
javascript:(function() {const injection = document.createElement('script'); injection.src = 'https://meisheep.github.io/taiwan-pm2_5-idw-map-on-windyty/dist/bundle.js'; document.body.appendChild(injection);})()
```
3. 製作一次書籤後，每次只要進入 [Windy](https://windy.com) 後，點擊書籤即可自動執行程式碼。

## Snapshot
![Snapshot](https://raw.githubusercontent.com/meisheep/taiwan-pm2_5-idw-map-on-windyty/master/snapshot.png)
![Snapshot Details](https://raw.githubusercontent.com/meisheep/taiwan-pm2_5-idw-map-on-windyty/master/snapshot2.png)
