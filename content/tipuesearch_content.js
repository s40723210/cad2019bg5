var tipuesearch = {"pages": [{'title': 'member', 'text': '   40523252\xa0  王彥筑 40723207\xa0  吳文翔     40723210\xa0  李承澤     40723216\xa0   林子欽     40723226\xa0 \xa0 高立倫     40723232\xa0  陳鈺凱     40723236\xa0  黃宏裕     40732319\xa0  林鉦淯 \n \n 倉儲網址: https://github.com/s40723210/cad2019bg5', 'tags': '', 'url': 'member.html'}, {'title': 'Week10~14', 'text': 'Fork倉儲 \n \n \n \n 1.先登入github，在搜尋自己組的倉儲，點進去。 2.點選右上角的Fork，選擇自己的github。 3. git clone --recurse-submodules \xa0(倉儲網址)。 4.git push完成，點選New pull request，等組長同意。 5.有衝突的話，進行git pull (倉儲網址)\xa0。 6.整合完成之後即可git push，等待組長同意。 我的教學影片(有字幕): https://youtu.be/1bZ16BgmF8c \n', 'tags': '', 'url': 'Week10~14.html'}, {'title': 'Notes', 'text': '\n', 'tags': '', 'url': 'Notes.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};