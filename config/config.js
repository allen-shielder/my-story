var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "YiLun Wu",
    // age: "29",
    phone: "+1 7788822987",
    location: "Burnaby, BC, Canada",
    email: "allenshielder1994@outlook.com",
    school: "Massey University/NYIT",
    major: "Computer & Cyber Engineering",
    log: "Allen Shielder",
    job: "Software Engineer",

    strFormContentName: "Name",
    strFormContentPhone: "Phone",
    strFormContentLocation: "Location",    
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
    about: "<p>Software Engineer with 5+ years of experience across New Zealand, North America, and now based in Canada. I specialize in full-stack development, cloud integration, and DevOps automation, with hands-on expertise in Salesforce, Kubernetes, and microservices.</p>"+
            "<p>At PwC, I led Salesforce deployments for enterprise clients like PepsiCo LATAM. At Ericsson, I worked on the CNOM platform supporting 3G/4G/5G and IMS networks. I also co-founded a food delivery startup in New Zealand, which grew to cover over 30% of Auckland's market."+
            "<p>I'm passionate about scalable, secure systems — and currently seeking new opportunities in Canada.</p>",
    strFormContentInfo: "Information",


    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        [".NET(C#)", 70, "rgb(147,147,145)"],
        ["Salesforce", 80, "rgb(191,191,191)"],
        ["HTML5/CSS3", 80, "rgb(224,229,223)"],
        ["JavaScript", 80, "rgb(181,196,177)"],
        ["Database(SQL/MongoDB/SOQL)", 75, "rgb(193,203,215)"],
        ["DevOps(Docker, Jenkins, Azure)", 70, "rgb(175,176,178)"],
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>Master's Degree in Electronic and Computer Engineering</li>" +
        "     <li>Experience with enterprise systems like PepsiCo LATAM and Ericsson CNOM</li>" +
        "     <li>Delivering cloud solutions with Salesforce, Docker, and Kubernetes</li>" +
        "     <li>Proficient in backend debugging, optimization, and system reliability</li>" +
        "     <li>Skilled in DevOps pipelines using Jenkins, GitHub Actions, and Azure</li>" +
        "     <li>Strong in cross-functional teamwork and clear technical communication</li>" +
        "     <li>Thrive under tight deadlines and fast-paced delivery cycles" +
        "     <li>Recognized for technical consistency and leadership trust</li></li>" +
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
        ["06/2023 - 01/2025", "<br><br>Ericsson",
            "<p><strong>Software Engineer</strong></p>" +
            "<p>Built backend services in Python + MongoDB for KPI & alarm analytics, improving efficiency by 30%</p>" +
            "<p>Managed real-time monitoring and alerting systems, reducing incident response time</p>" +
            "<p>Deployed containerized services on Kubernetes, with full CI/CD automation using Jenkins</p>" +
            "<p>Worked in an Agile environment supporting 3G/4G/5G and IMS networks</p>"
        ],

        ["08/2021 - 02/2023", "<br><br>PwC US",
            "<p><strong>Software Engineer</strong></p>" +
            "<p>Led Salesforce-SAP integration for enterprise clients like PepsiCo Cloud</p>" +
            "<p>Developed and maintained custom Salesforce solutions using Apex, LWC, and Flow</p>" +
            "<p>Built secure, scalable APIs to support real-time data exchange</p>" +
            "<p>Automated CI/CD pipelines via Azure, Jenkins, and Copado</p>" +
            "<p>Focused on unit testing, metadata-driven architecture, and global team collaboration</p>"
        ],

        ["12/2019 — 03/2021", "<br><br>LoveLive Ltd NZ",
            "<p><strong>Full-stack Engineer</strong></p>" +
            "<p>Developed Soda Express, scaling to 30% of Auckland's food delivery market</p>" +
            "<p>Full-stack dev with Flutter, Salesforce, C#, MySQL</p>" +
            "<p>Built real-time tracking and optimized delivery routes</p>" +
            "<p>Owned DevOps with Jenkins and led client delivery</p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["01/2025", "Move to Canada", "Started my Second Master's in Cybersecurity.<p>Transitioning from engineering to security, building toward the future of trusted systems.</p>"],
        ["06/2023", "Joined Ericsson and CNOM", "Worked as a backend engineer in telecom core network systems. Gained deep experience in cloud deployment and real-time monitoring.<p>Built robust services for North America's 5G networks & IMS Operation and Management system.</p>"],
        ["08/2021", "Started at PwC US", "Joined PwC US as a Salesforce Developer, working on global enterprise CRM and DevOps projects."],
        ["11/2020", "Graduated!", "Despite Covid-19 challenges, I completed my studies and transitioned toward enterprise tech."],
        ["12/2019", "Founded LoveLive Ltd","I led the development of a logistics platform that later handled over 30% of Auckland's delivery market. <P>This was my first full-stack project from 0 to 1 — and my introduction to DevOps, mobile apps, and system scaling.</P>"],
        ["10/2018", "Kia Ora Aotearoa", "I came on Halloween Eve 2018 and began my overseas academic and professional journey. This was the start of everything — new life, new goals, new continent."]
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