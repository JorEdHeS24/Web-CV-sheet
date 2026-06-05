// this returns a p containe that recive a text. is thinked to generate a generic p container to be use for other structures.
export const TEXT_CONTAINER = (text)=>
{
    return `<p class="card-text">${text}</p>`
}

export const TITLE = "Curriculum vitae JEHS"
export const ABOUT_ME = "I am a proactive, motivated worker, eager to always excel in what I do, with excellent values, looking for a company with which I can share my vision, establish a cordial and professional relationship in which I can grow and contribute value to it every day."

export const SECTIONS_TITLES = {
    contacts_sect_title : "Contacts",
    languajes_sect_title : "Languajes",    
    soft_skill_title : "Soft skills",
    aboutme_sect_title : "About me",
    expirience_sect_title : "Expirience",
    formation_sect_title : "Formation",
    work_skill_title : "Work Skills"
}


export const CONTACT_INFO = {   
    USER_FULLNAME : "Jorge Eduardo Herrera Solano", 
    USER_PHONE_NUMBER : "3225270340",
    USER_EMAIL : "jogeeherreras24@gmail.com"
}

export const LANGUAGES = [
    "Spanish",
    "English"
    
]

export const EXPIRIENCE_DETAILS = 
[
    {
    position : "court dependent",  
    enterprise : "law firm", 
    description : "Review of court records, filing petitions in person at the courts, review of judicial platforms.", 
    duration : "January 2018 - Diciembre 2019"  
    },
    {
    position : "Technical Support",  
    enterprise : "Independent", 
    description : "Computer support and maintenance services to individuals. preventative and corrective maintenance of hardware and software.", 
    duration : "January 2015 - Present"  
    },
    {
    position : "Call center agent",  
    enterprise : "Teleperformance", 
    description : "Bilingual call center agent for digital bank in the United States", 
    duration : "August 2025 - January 2026"  
    },    
    {
    position : "Call center agent",  
    enterprise : "Sitel", 
    description : "Semi-bilingual call center agent for Verizon United States", 
    duration : "July 2022 - December 2022"  
    }
]
export const FORMATION_DETAILS = 
[
    {
    degree : "University / Professional degree",  
    place : "Corporacion universitaria Latinoamerica (CUL)",  
    duration : "January 2024 - Currently"  
    },       
    {
    degree : "University / Technical degree",  
    place : "ITSA/Uni-Barranquilla",  
    duration : "January 2017 - December 2019"  
    }   
    
]

export const SOFT_SKILLS_TAGS = 
[
    "work under pressure,", 
    "Critical thinking", 
    "Problem solving", 
    "Analytical thinking", 
    "Proactivity",
    "Commitment"
,    "Patience",
    "Problem solving",
    "Dynamism",
    "Communication skills"
]

export const WORK_SKILLS_TAGS = 
[
    "Programming", 
    "Computer maintenance",
    "Customer service",
    "Technical Support",
    "Microsoft Excel",
    "Artificial inteligence",
    "Effective English communication"
]
    

export const ACTIONS = {
    add_expirience: "Add expirience",
    add_formation: "Add formation",
    add_button_txt:" Add +"
}