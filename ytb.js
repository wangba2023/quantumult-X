// 修改 G 类的 save 方法，添加重置标志的语句
save() {
    if (this.needSave) {
        w.debug("Update Config");
        let e = {
            version: this.version,
            whiteNo: this.whiteNo,
            blackNo: this.blackNo,
            whiteEml: this.whiteEml,
            blackEml: this.blackEml
        };
        w.debug(e);
        w.setJSON(e, "YouTubeAdvertiseInfo");
        this.needSave = false; // 添加重置标志
    }
}

// 修改 Ve 类的 pure 方法，添加子处理器的保存调用
async pure() {
    for (let e of this.message.contents) {
        if (e.player) {
            this.player.message = e.player;
            await this.player.pure();
            this.player.save(); // 保存 player 配置
        }
        if (e.next) {
            this.next.message = e.next;
            await this.next.pure();
            this.next.save(); // 保存 next 配置
        }
        this.needProcess = true;
    }
    return this;
}