class FooterData{
    static footerDataLoaded(){
        if(sessionStorage.getItem("footerData") === null)
            return false
        else
            return true
    }

    static getFooterData(){
        let data = JSON.parse(sessionStorage.getItem('footerData'));
        return data
    }

    static setFooterData(data){
        sessionStorage.setItem('footerData', data)
    }
}
export default FooterData;