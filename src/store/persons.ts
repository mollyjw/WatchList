import Person from "../models/person-model"

export const PersonList: Person[] = [
    // EXAMPLE
    // { 
    //     id: number,
    //     name: string,
    //     suspects: string, //suspects
    //     topic: string,   //title
    //     date: string,
    //     location: string,
    //     details: string,
    //     reward: string,
    //     fieldOffice: 
    //     images: []
    // },
    {
        id: 1,
        name: "Alonzo Brooks",
        suspects: "unknown", 
        topic: "Seeking Information",  
        date: "April 3, 2004",
        location: "La Cygne, Kansas",
        details: "Alonzo Brooks attended a party at a rural house outside of La Cygne, Kansas, the night of April 3, 2004. When Alonzo didn’t return home from the party, his family called authorities in Linn County, Kansas. The Linn County Sheriff’s Department launched a search. Almost a month later, Alonzo was still missing when his family organized a search party of approximately 50 volunteers. On May 1, 2004, they found his body located in brush in a creek in Linn County. An autopsy was not able to determine the cause of death.  Alonzo was 23 years old at the time of his death. He was described as being mild-mannered and a good-humored person.",
        reward: "The FBI is offering a reward of up to $100,000 for information leading to the arrest, prosecution and conviction of the individual or individuals that may be responsible for Alonzo Brooks’ death.",
        fieldOffice: "Kansas City",
        image: "https://www.fbi.gov/wanted/seeking-info/alonzo-brooks/@@images/image/large"
    },
    {
        id: 2,
        name: "Ruben A. Hernandez",
        suspects: "Hispanic maile with brown hair and brown eyes; DOB used: 01/02/02", //suspects
        topic: "Crimes Against Children",   //title
        date: "August 27, 2020",
        location: "Louisville, Kentucky",
        details: "On August 27, 2020, in Louisville, Kentucky, Ruben Hernandez allegedly live streamed, via Instagram, a minor having sexual intercourse with an adult male. This live stream was sent to other suspects allegedly under investigation by law enforcement. Hernandez was indicted on February 24, 2021, by the United States District Court, for the Western District of Kentucky, Paducah, Kentucky, for production of child pornography, A federal warrant was issued for his arrest.",
        reward: "None yet",
        fieldOffice: "Louisville",
        image: "https://www.fbi.gov/wanted/cac/ruben-a-hernandez/@@images/image/large"
    },
    {
        id: 3,
        name: "Pedro Sanchez-Laporte",
        suspects: "White (Hispanic) male with black hair (may have shaved head) and brown eyes; DOB used: 05/03/81, 05/03/87",
        topic: "Criminal Enterprise Investigations",
        date: "January 18, 2018",
        location: "Reading, Pennsylvania",
        details: "The FBI’s Philadelphia Division and the Berks County District Attorney’s Office are seeking the public’s assistance in locating Pedro Sanchez-Laporte.  On January 28, 2018, Sanchez-Laporte and four other alleged members of the Trinidad Drug Trafficking Organization (DTO) allegedly confronted four individuals selling narcotics in Reading, Pennsylvania, in a location operated and controlled by the Trinidad DTO.  The confrontation allegedly escalated into threats, after which Sanchez-Laporte and his associates allegedly opened fire on the individuals.  Three victims died at the scene, with the fourth, Sanchez-Laporte’s nephew, succumbing to his wounds at the hospital.  Sanchez-Laporte’s associates have been indicted, arrested, and are awaiting trial in this case; only Sanchez-Laporte remains at large. A federal arrest warrant was issued for Sanchez-Laporte on October 23, 2019, in the United States District Court, Eastern District of Pennsylvania, Philadelphia, Pennsylvania, after he was charged with Murder in the Course of Using a Firearm and Carrying a Firearm in Furtherance of Drug Trafficking, Discharge of a Firearm in Furtherance of Drug Trafficking, Conspiracy to Distribute Controlled Substances, and Aiding and Abetting.",
        reward: "The FBI is offering a reward of up to $25,000 for information leading to the arrest and conviction of Pedro Sanchez-Laporte.",
        fieldOffice: "Philadelphia",
        image: "https://www.fbi.gov/wanted/cei/pedro-sanchez-laporte/@@images/image/large" 
    },
    {
        id: 4,
        name: "Badraldeen Mohamad Elwaseem",
        suspects: "unknown",
        topic: "Seeking Information",
        date: "April 6, 2019",
        location: "Buffalo, New York",
        details: "Law enforcement officials are seeking information regarding the murder of 12-year-old Badraldeen Mohamad Elwaseem who was shot and killed on April 6, 2019, in Buffalo, New York. Badraldeen was in the kitchen of his apartment around 8:30 p.m. when he was fatally shot in the head by a stray bullet.",
        reward: "The FBI is offering a reward of up to $25,000 for information leading to the arrest of the person(s) responsible for the shooting death of Badraldeen Mohamad Elwaseem.",
        fieldOffice: "Buffalo",
        image: "https://www.fbi.gov/wanted/seeking-info/badraldeen-mohamad-elwaseem/@@images/image/large"
    }
]