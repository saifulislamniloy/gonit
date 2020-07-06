class NoticeData{
    static noticeDataLoaded(){
        if(sessionStorage.getItem("noticeData") === null)
            return false
        else
            return true
    }

    static getNoticeData(){
        let data = JSON.parse(sessionStorage.getItem('noticeData'));
        return data
    }

    static setNoticeData(data){
        sessionStorage.setItem('noticeData', JSON.stringify(data))
    }
}
export default NoticeData;