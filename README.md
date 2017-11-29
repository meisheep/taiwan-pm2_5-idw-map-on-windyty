# 空污污流流 - Taiwan PM2.5 IDW Diagram Map on Windyty
空污污流流是一套在 Windy.com 上繪製台灣空污地圖的小程式，透過在 Windy.com 植入 JS code 來操作 Leaflet 物件來進行繪製。原專案[在此](https://github.com/meisheep/taiwan-pm2_5-map-on-windyty)，應社群需求另外開發此 IDW Diagram 版本。

## Snapshots
![Snapshot](https://raw.githubusercontent.com/meisheep/taiwan-pm2_5-idw-map-on-windyty/master/snapshot.png)
![Snapshot Details](https://raw.githubusercontent.com/meisheep/taiwan-pm2_5-idw-map-on-windyty/master/snapshot2.png)

## 資料來源
[PM2.5開放資料入口網站](https://pm25.lass-net.org/)

## 如何使用

### 手動執行
1. 打開 [Windy](https://windy.com)
2. 打開 console 執行以下程式碼：
```js
{const injection = document.createElement('script'); injection.src = 'https://meisheep.github.io/taiwan-pm2_5-idw-map-on-windyty/dist/bundle.js'; document.body.appendChild(injection);}
```
### 加入瀏覽器書籤
1. 打開瀏覽器並新增一個書籤（Bookmark）
2. 名稱自訂，網址貼上以下內容：
```
javascript:(function() {const injection = document.createElement('script'); injection.src = 'https://meisheep.github.io/taiwan-pm2_5-idw-map-on-windyty/dist/bundle.js'; document.body.appendChild(injection);})()
```
3. 製作一次書籤後，每次只要進入 [Windy](https://windy.com) 後，點擊書籤即可自動執行程式碼。
