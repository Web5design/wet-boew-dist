/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-release Build: 2013-04-27 04:04 AM
 *
 */
(function(b){var a=window.pe||{fn:{}};a.dic.ind={"%lang-code":"ja","%lang-eng":"Japanese","%lang-fra":"japonais","%lang-native":"日本語","%all":"すべて","%home":"ホーム","%main-page":"メインページ","%top-of-page":"ページの先頭","%you-are-in":"現在位置：","%welcome-to":"[xxx] へようこそ","%loading":"ロード中･･･","%processing":"処理中･･･","%search":"検索","%search-for-terms":"検索キーワード：","%no-match-found":"次の条件に一致する情報は見つかりませんでした。","%matches-found":{mixin:"検索結果： [MIXIN] 件"},"%menu":"メニュー","%settings":"設定","%languages":"言語","%about":"約","%current":"（現在）","%hide":"非表示","%error":"エラー","%colon":"：","%hyphen":" - ","%start":"開始","%stop":"終了","%back":"戻る","%new-window":"（新しいウィンドウで開く）","%minute-ago":"1分前","%couple-of-minutes":"数分前","%minutes-ago":{mixin:"[MIXIN] 分前"},"%hour-ago":"1時間前","%hours-ago":{mixin:"[MIXIN] 時間前"},"%days-ago":{mixin:"[MIXIN] 日前"},"%yesterday":"昨日","%next":"次へ","%previous":"前へ","%first":"最初","%last":"最後","%archived-page":"このページはウェブ上にアーカイブされています。","%sub-menu-help":"（サブメニューを開くには「エンター」キーを、閉じるには「Esc」キーを押す。）","%tab-rotation":{disable:"タブローテーションを停止",enable:"タブローテーションを再生"},"%tab-list":"タブリスト","%tab-panel-end-1":"最後のタブパネル","%tab-panel-end-2":"タブの一覧に戻る","%tab-panel-end-3":"または、ページの残りの部分に進む。","%play":"再生","%pause":"一時停止","%open":"開く","%close":"閉じる","%rewind":"巻き戻し","%fast-forward":"早送り","%mute":{enable:"ミュート",disable:"ミュート解除"},"%closed-caption":{disable:"クローズドキャプションを非表示",enable:"クローズドキャプションを表示"},"%closed-caption-error":"クローズドキャプションを実行できませんでした。","%audio-description":{enable:"音声ガイドを有効にする",disable:"音声ガイドを無効にする"},"%progress-bar":"左矢印キーで戻る／右矢印キーで進む","%no-video":"ご利用のブラウザではこの動画を再生できません。以下の動画をダウンロードしてください。","%position":"現在位置：","%percentage":"再生率：","%duration":"合計時間：","%buffered":"バッファリングの進行状況：","%favourite":"お気に入り","%email":"メール","%share-text":"このページを共有する","%share-hint":"{s}と","%share-email-subject":"注目のページ","%share-email-body":"おすすめのページ：n{t} ({u})","%share-fav-title":"（ブックマークに登録する）","%share-manual":"ブックマークに登録するには、このダイアログを閉じて「Ctrl＋D」を押してください。","%share-showall":"({n})をすべて表示","%share-showall-title":"ブックマークサイト一覧","%share-disclaimer":"製品またはサービスを推薦／保証するものではありません。","%form-not-submitted":"フォームを送信できませんでした。原因：","%errors-found":"複数のエラーが見つかりました。","%error-found":"エラーが見つかりました。","%datepicker-hide":"カレンダーを非表示","%datepicker-show":"カレンダーから日付を選択：","%datepicker-selected":"選択済み","%calendar-weekDayNames":["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],"%calendar-monthNames":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"%calendar-currentDay":"（今日）","%calendar-goToLink":'<span class="wb-invisible">月</span>に移動',"%calendar-goToTitle":"月移動","%calendar-goToMonth":"月：","%calendar-goToYear":"年：","%calendar-goToButton":"進む","%calendar-cancelButton":"取消","%calendar-previousMonth":"前の月へ","%calendar-nextMonth":"次の月へ","%show-toc":"表示","%show-text":"目次を表示する","%hide-text":"目次を表示しない","%table-contents":"目次","%lb-current":"{total} 件中 {current} 件目","%lb-next":"次へ","%lb-prev":"前へ","%lb-xhr-error":"コンテンツをロードできませんでした。","%lb-img-error":"画像をロードできませんでした。","%lb-slideshow":"スライドショー","%jqm-expand":"コンテンツを表示","%jqm-collapse":"コンテンツを非表示","%jqm-clear-search":"検索履歴を削除する","%jqm-filter":"検索条件を指定する","%jqm-tbl-col-toggle":"列･･･","%table-mention":"表","%table-following":"チャート図。詳細については次の表を参照。","%st-timeout-msg":"間もなくセッションタイムアウトになります。接続を継続する場合は、#expireTime#以内に「OK」ボタンを押してください。","%st-msgbox-title":"セッションタイムアウト警告","%st-already-timeout-msg":"セッションがタイムアウトしました。再度ログインを行なってください。","%td-toggle":"表示形式を全て切り替える","%td-open":"全て開く","%td-close":"全て閉じる","%td-ttl-open":"コンテンツの全てのセクションを開く","%td-ttl-close":"コンテンツの全てのセクションを閉じる","%sSortAscending":"：昇順ソートをオンにする","%sSortDescending":"：降順ソートをオンにする","%sEmptyTable":"表の中にデータがありません","%sInfo":"_TOTAL_エントリーの_START_から_END_までを表示","%sInfoEmpty":"0エントリーのうち、0から0までを表示","%sInfoFiltered":"（合計_MAX_エントリーからフィルタリング）","%sInfoThousands":",","%sLengthMenu":"_MENU_エントリーを表示","%geo-mapcontrol":"マップコントロール","%geo-panup":"上へ移動","%geo-pandown":"下へ移動","%geo-panleft":"左へ移動","%geo-panright":"右へ移動","%geo-zoomin":"ズームイン","%geo-zoomout":"ズームアウト","%geo-zoomworld":"地図を最大に拡大表示する","%geo-zoomslider":"ドラッグしてズームイン・ズームアウト","%geo-zoomfeature":"エレメントにズームイン","%geo-ariamap":"地図オブジェクト。地図機能の詳細については以下を参照。","%geo-accessibilize":"<strong>キーボードをお使いの方へ：</strong>地図が表示されたら、「矢印」キーで上下左右に移動したり、「＋」「－」キーで拡大・縮小できます。地図が最大に拡大表示されている時は、「矢印」キーを使って移動できません。","%geo-accessibilizetitle":"地図ナビゲーションの使い方","%geo-togglelayer":"レイヤーの表示・非表示の切り替え","%geo-hiddenlayer":"このレイヤーは表示されていません。","%geo-basemapurl":"http://geogratis.gc.ca/maps/CBMT","%geo-basemaptitle":"CBMT","%geo-select":"選択","%geo-labelselect":"マップエレメントを選択","%pe-disable":"HTMLベーシック版","%pe-enable":"スタンダード版"};a.document.trigger("languageloaded");window.pe=a;return a}(jQuery));