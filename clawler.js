const http = require('http')
const cheerio = require('cheerio')
const url = 'http://www.imooc.com/learn/348'

function filterChapters(html){
    let $ = cheerio.load(html)
    // console.log($.html())
    $.html()
    const chapters  = $('.course-wrap');
    let courseData = [];

    chapters.each(function(index,item){ //对于遍历数组的元素，js和jquery都有类似的方法，js用的是forEach而jquery用的是each
        const _this = $(this).find('h3')
        // console.log(_this.text())
        courseData.push(_this.text())
    })
    return courseData
}

http.get(url,function(res){
    let html = ''
    res.on('data',function(data){
        html+=data
    })
    res.on('end',function(){
        // console.log(html)
        console.log(filterChapters(html))
    })
}).on('error',function(){
    console.log('获取课程数据出错！')
})