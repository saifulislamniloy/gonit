class BannerData{
    static bannerDataLoaded(){
        if(sessionStorage.getItem("bannerData") === null)
            return false
        else
            return true
    }

    static getBannerData(){
        let data = JSON.parse(sessionStorage.getItem('bannerData'));
        return data
    }

    static setBannerData(data){
        sessionStorage.setItem('bannerData', data)
    }
}
export default BannerData;