var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "YiLun Wu",
    age: "29",
    phone: "+64 0212725003",
    email: "allenshielder1994@outlook.com",
    school: "Massey University",
    major: "Electronic and Computer Engineering",
    log: "Allen Shielder",
    job: "Software Engineer",

    strFormContentName: "Name",
    strFormContentAge: "Age",
    strFormContentPhone: "Phone",
    strFormContentMail: "Mail",
    strFormContentSchool: "School",
    strFormContentMajor: "Major",
    strFormContentJob: "Job",

    // title
    strFormContentPersonalInfo: "Personal Information",
    strFormContentSkillnSummary: "Skills& Summary",
    strFormContentWorkHistory: "Work History",
    strFormContentMyStory: "My Story",


    /*在这里配置首页的座右铭集合*/
    motto: [

        "I am not only a Developer, but the Creator of the Era"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    // welcome: "青青子衿，悠悠我心<br>" +
    //          "但为君故，沉吟至今<br>" +
    //          "你好，我是卢世荣，南昌大学软件工程大二在读生<br>" +
    //          "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>Yilun Wu (Allen) is a Sr Software Engineer at PwC, primarily responsible for the development and deployment of Salesforce, with experience in large-scale projects such as PepsiCo's Latam, and Huawei's xFusion. Customers all gave a high comment for his DevOps and Salesforce development capabilities.</p>"+
            "<p>In 2019, Allen and his partners co-founded Love Live Technology in Auckland, New Zealand. Allen learned a lot during his entrepreneurial years, not only his first exposure to CRM (Salesforce) and DevOps technologies but also about agile development concepts and project management in various projects.</p>"+
            "<p>Currently, Allen is interested in a challenge. Reach out to allenshielder1994@outlook.com to connect!</p>",
    strFormContentInfo: "Information",
    strFormContentSummary: "Summary",


    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["C#", 80, "rgb(147,147,145)"],
        ["Salesforce Development", 77, "rgb(191,191,191)"],
        ["HTML5+CSS3", 75, "rgb(224,229,223)"],
        ["JavaScript", 75, "rgb(181,196,177)"],
        ["SQL", 65, "rgb(193,203,215)"],
        ["DevOps", 60, "rgb(175,176,178)"],
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>Master's Degree in Computer Engineering.</li>" +
        "     <li>Complex enterprise systems (Pepsi system and Huawei system) support experience</li>" +
        "     <li>Ability to work in team collaboration or independently.</li>" +
        "     <li>Ability to work under pressure.</li>" +
        "     <li>Ability to troubleshoot program issues</li>" +
        "     <li>Ability to build trusting relationships with clients and colleagues</li>" +
        "     <li>Good knowledge of varieties of DevOps Tools(Azure, Jenkins, and Copado)" +
        "     <li>Have excellent communication skills (both written and verbal).</li></li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/pro-1.png", "http://1.15.234.109:8000/", "个人博客", "这里记录了我的Java后端学习笔记<br>持续更新"],
        ["./images/pro-2.png", "https://github.com/happysnaker/Gobang", "智能人机对战五子棋", "采用C++编写的智能五子棋人机对战<br>2021/7/23"],
        ["https://pic3.zhimg.com/80/v2-d9766956d5c85c2780e4c5008fd946ca_1440w.jpg", "https://github.com/happysnaker/StudentsManageSystem", "学生管理系统", "C语言+AVL树+多重双向表实现"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["08/2021 — Today", "<br>PwC US",
            "<p><strong>Sr Software Engineer</strong></p>" +
            "<p>Salesforce Developer</p>" +
            "<p>DevOps(Azure, Jenkins and Copado)</p>" +
            "<p>Quality Analysis</p>"
        ],

        ["12/2019 — 03/2021", "<br>LoveLive Ltd(Self-Entrepreneurial)",
            "<p><strong>Technical Leader</strong></p>" +
            "<p>Full stack Developer(Flutter, Salesforce, C#, MySql)</p>" +
            "<p>DevOps(Jenkins)</p>" +
            "<p>Technical Support</p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["01/08/2021", "Hello PwC, Hello Shanghai", "On the first day of August 2021, I successfully joined PwC US and was based in Shanghai. It feels so good to be home."],
        ["11/2020", "I Graduated!", "In November 2020, I finally got my Master of Engineering from Massey University and finished university life. Although I spent most of the second half of my college life in rental housing due to the Covid-19 outbreaking, I still think the day is worth celebrating :)"],
        ["12/2019", "When genius wanna change life", "When I stayed with my roommate for a half year, he and I wanted to be able to eat fast and cheap food delivery. We decided to build up our company (LoveLive Ltd)."],
        ["31/10/2018", "Kia Ora Aotearoa", "After receiving a Condition offer from Massey University in July 2018, I arrived in New Zealand on the last day of October (Halloween eve) to prepare for my university life."]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "https://leetcode-cn.com/u/happysnaker/", "我的力扣主页"],
        ["./svg/github.svg", "https://github.com/happysnaker", "我的GitHub主页"],
        ["./svg/博客.svg", "http://1.15.234.109:8000", "我的个人博客"],
        ["./svg/掘金.svg", "https://juejin.cn/user/3853167638625000", "我的掘金主页"],
        ["./svg/知乎.svg", "https://www.zhihu.com/people/tian-xia-you-dao-81", "我的知乎主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ],

    strCopyright: "Copyright 2020-Today this.com All Rights Reserved"

}