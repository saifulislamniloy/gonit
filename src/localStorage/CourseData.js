class CourseData{
    static courseDataLoaded(){
        if(sessionStorage.getItem("courseData") === null)
            return false
        else
            return true
    }

    static getCourseData(){
        let data = JSON.parse(sessionStorage.getItem('courseData'));
        return data
    }

    static setCourseData(data){
        sessionStorage.setItem('courseData', JSON.stringify(data))
    }
}
export default CourseData;