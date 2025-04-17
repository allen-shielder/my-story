export const EXPCARD = {
    Ericsson:[
        'Built backend services in Python + MongoDB for KPI & alarm analytics, improving efficiency by 30%',
        'Managed real-time monitoring and alerting systems, reducing incident response time',
        'Deployed containerized services on Kubernetes, with full CI/CD automation using Jenkins',
        'Worked in an Agile environment supporting 3G/4G/5G and IMS networks',
    ],

    'PwC US': [
        'Led Salesforce-SAP integration for enterprise clients like PepsiCo Cloud',
        'Developed and maintained custom Salesforce solutions using Apex, LWC, and Flow',
        'Built secure, scalable APIs to support real-time data exchange',
        'Automated CI/CD pipelines via Azure, Jenkins, and Copado',
        'Focused on unit testing, metadata-driven architecture, and global team collaboration',
    ],

    'LoveLive Ltd NZ': [
        "Developed Soda Express, scaling to 30% of Auckland's food delivery market",
        "Full-stack dev with Flutter, Salesforce, C#, MySQL",
        "Built real-time tracking and optimized delivery routes",
        "Owned DevOps with Jenkins and led client delivery",
    ],
}



export function contentHandler(dataArray, formatter) {
    return dataArray.map(formatter).join("\n");
  }