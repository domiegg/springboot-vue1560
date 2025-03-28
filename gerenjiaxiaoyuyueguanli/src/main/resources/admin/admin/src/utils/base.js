const base = {
    get() {
        return {
            url : "http://localhost:8080/gerenjiaxiaoyuyueguanli/",
            name: "gerenjiaxiaoyuyueguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gerenjiaxiaoyuyueguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "个人驾校预约管理系统"
        } 
    }
}
export default base
