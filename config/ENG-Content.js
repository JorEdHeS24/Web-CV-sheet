// this returns a p containe that recive a text. is thinked to generate a generic p container to be use for other structures.
export const TEXT_CONTAINER = (text)=>
{
    return `<p class="card-text">${text}</p>`
}

export const TITLE = "Curriculum vitae JEHS"
export const ABOUT_ME = "Sixth-semester Systems Engineering student with a strong background in development (Frontend/Backend), databases, and networks. My experience in bilingual call centers has provided me with advanced communication and problem-solving skills under pressure. I have a versatile and analytical profile, capable of contributing in development, technical support, infrastructure, or analysis. I am proactive, bilingual, and ready to apply technical knowledge to real-world business solutions."

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
    "Teamwork", 
    "Critical thinking", 
    "Problem solving", 
    "Analytical thinking", 
    "Proactivity"
]

export const WORK_SKILLS_TAGS = 
[
    "Programming", 
    "Web development", 
    "Full Stack development", 
    "React", 
    "Python", 
    "HTML",
    "CSS",
    " Javascript", 
    "MySql",
    "REST API",
    "Java",
    "Artificial intelligence",
    "C#",
    ".NET",
    "PHP",
    "Scrum",
    "UML",
    "MVC",
    "Computer maintenance",
    "Customer service",
    "Microsoft Excel"
]
    

export const ACTIONS = {
    add_expirience: "Add expirience",
    add_formation: "Add formation",
    add_button_txt:" Add +"
}