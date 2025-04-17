export const ABOUTME = [
    "Software Engineer with 5+ years of experience across New Zealand, North America, and now based in Canada. I specialize in full-stack development, cloud integration, and DevOps automation, with hands-on expertise in Salesforce, Kubernetes, and microservices.",
    "At PwC, I led Salesforce deployments for enterprise clients like PepsiCo LATAM. At Ericsson, I worked on the CNOM platform supporting 3G/4G/5G and IMS networks. I also co-founded a food delivery startup in New Zealand, which grew to cover over 30% of Auckland's market.",
    "I'm passionate about scalable, secure systems — and currently seeking new opportunities in Canada."
]

export const INFORMATION = [
    ['Name', 'YILUN WU'],
    ['Phone', '+1 7788822987'],
    ['Location', 'Burnaby, BC, Canada'],
    ['Mail', 'allenshielder1994@outlook.com'],
    ['School', 'Massey University / NYIT'],
    ['Major', 'Computer & Cyber Engineering'],
    ['Job', 'Software Engineer'],
    ['Experience', '5+ years']
]

export function contentHandler(dataArray, formatter) {
    return dataArray.map(formatter).join("\n");
  }
