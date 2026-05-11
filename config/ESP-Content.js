// this returns a p containe that recive a text. is thinked to generate a generic p container to be use for other structures.
export const TEXT_CONTAINER = (text)=>
{
    return `<p class="card-text">${text}</p>`
}

export const TITLE = "Hoja de vida JEHS"
export const ABOUT_ME = "Estudiante de Ingeniería de Sistemas en 6 semestre con sólida formación en desarrollo (Frontend/Backend), bases de datos y redes. Mi experiencia en Call Centers bilingües me ha brindado habilidades avanzadas de comunicación y resolución de problemas bajo presión. Perfil versátil y analítico, capaz de aportar en áreas de desarrollo, soporte técnico, infraestructura o análisis. Proactivo, bilingüe y listo para aplicar conocimientos técnicos en soluciones empresariales reales."

export const SECTIONS_TITLES = {
    contacts_sect_title : "Contactos",
    languajes_sect_title : "Idiomas",    
    soft_skill_title : "Habilidades blandas",
    aboutme_sect_title : "Acerca de mi",
    expirience_sect_title : "Expériencia",
    formation_sect_title : "Formación",
    work_skill_title : "Habilidades de trabajo"
}


export const CONTACT_INFO = {   
    USER_FULLNAME : "Jorge Eduardo Herrera Solano", 
    USER_PHONE_NUMBER : "3225270340",
    USER_EMAIL : "jogeeherreras24@gmail.com"
}


export const LANGUAGES = [
    "Español",
    "Ingles"
    
]


export const EXPIRIENCE_DETAILS = 
[
    {
    position : "Agente de call center",  
    enterprise : "Teleperformance", 
    description : "Agente de Call center Bilingüe para Banco digital en estados unidos", 
    duration : "Agosto 2025 - Enero 2026"  
    },    
    {
    position : "Agente de call center",  
    enterprise : "Sitel", 
    description : "Agente de Call center Semibilingue para Verizon estados unidos", 
    duration : "Julio 2022 - Diciembre 2022"  
    }
]

export const FORMATION_DETAILS = 
[
    {
    degree : "Universidad / Carrera Profesional",  
    place : "Corporacion universitaria Latinoamerica (CUL)",  
    duration : "Enero 2024 - Actualmente"  
    },       
    {
    degree : "Universidad / Carrera técnica",  
    place : "ITSA/Uni-Barranquilla",  
    duration : "Enero 2017 - Diciembre 2019"  
    }   
    
]

export const SOFT_SKILLS_TAGS = 
[
    "Trabajo en equipo", 
    "Pensamiento crítico", 
    "Resolución de problemas", 
    "Pensamiento analítico", 
    "Proactividad"
]

export const WORK_SKILLS_TAGS = 
[
    "Programacion", 
    "Desarrollo web", 
    "Desarrollo Full Stack", 
    "React", 
    "Python", 
    "HTML",
    "CSS",
    " Javascript", 
    "MySql",
    "Api rest",
    "Java",
    "Inteligencia artificial",
    "C#",
    ".net",
    "Php",
    "Scrum",
    "Uml",
    "Mvc",
    "Mantenimiento de computadores",
    "Microsoft Excel"
]

export const ACTIONS = {
    add_expirience: "Añadir experiencia",
    add_formation: "Añadir formación",
    add_button_txt:" Añadir +"
}
    


