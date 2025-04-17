export const MYSTORY = [
    ['left', '01/2025', 'Move to Canada', "Started my Second Master's in Cybersecurity.", "Transitioning from engineering to security, building toward the future of trusted systems."],
    ['right', '06/2023', 'Joined Ericsson and CNOM', 'Worked as a backend engineer in telecom core network systems. Gained deep experience in cloud deployment and real-time monitoring.', "Built robust services for North America's 5G networks & IMS Operation and Management system."],
    ['left', '08/2021', 'Started at PwC US', 'oined PwC US as a Salesforce Developer, working on global enterprise CRM and DevOps projects.', ''],
    ['right','11/2020', 'Graduated!', 'Despite Covid-19 challenges, I completed my studies and transitioned toward enterprise tech.', ''],
    ['left', '12/2019', 'Founded LoveLive Ltd', "I led the development of a logistics platform that later handled over 30% of Auckland's delivery market.", "This was my first full-stack project from 0 to 1 — and my introduction to DevOps, mobile apps, and system scaling."],
    ['right', '10/2018', 'Kia Ora Aotearoa', 'I came on Halloween Eve 2018 and began my overseas academic and professional journey. This was the start of everything — new life, new goals, new continent.', ''],
]





export function contentHandler(dataArray, formatter) {
    return dataArray.map(formatter).join("\n");
  }