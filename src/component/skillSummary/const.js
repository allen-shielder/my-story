export const SKILLS = [
    ['.NET(C#)', '70'],
    ['Salesforce', '80'],
    ['HTML5/CSS3', '80'],
    ['JavaScript', '80'],
    ['SchDatabase(SQL/MongoDB/SOQL)', '75'],
    ['DevOps(Docker, Jenkins, Azure)', '70'],
]


export const SUMMARY = [
    "Master's Degree in Electronic and Computer Engineering",
    "Experience with enterprise systems like PepsiCo LATAM and Ericsson CNOM",
    "Delivering cloud solutions with Salesforce, Docker, and Kubernetes",
    "Proficient in backend debugging, optimization, and system reliability",
    "Skilled in DevOps pipelines using Jenkins, GitHub Actions, and Azure",
    "Strong in cross-functional teamwork and clear technical communication",
    "Thrive under tight deadlines and fast-paced delivery cycles",
    "Recognized for technical consistency and leadership trust"
]

export function contentHandler(dataArray, formatter) {
    return dataArray.map(formatter).join("\n");
  }