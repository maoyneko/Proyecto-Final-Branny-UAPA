// Función para mostrar secciones
function showSection(sectionId) {
    // Ocultar todas las secciones
    const allSections = document.querySelectorAll('.section-content');
    allSections.forEach(section => section.classList.remove('active'));

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(sectionId + '-section');
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Actualizar la pestaña activa
    const allTabs = document.querySelectorAll('.nav-link');
    allTabs.forEach(tab => tab.classList.remove('active'));
    const selectedTab = document.querySelector(`.nav-link[onclick="showSection('${sectionId}')"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

// Datos del CV (copiados del PDF)
const cvData = {
    contact: {
        phone: "849-817-1356",
        email: "bsmithseverino@gmail.com",
        address: "Distrito Nacional, Altos de Arroyo Hondo, Santo Domingo."
    },
    profile: "Supervisor de Contact Center con más de cinco años de experiencia en liderar equipos de atención al cliente. Expertise en mejorar la eficiencia operativa y garantizar la satisfacción del cliente.",
    experience: [
        { 
            title: "Supervisor Contact Center", 
            company: "Seguros Pepin", 
            dates: "Nov 2018 - Actual",
            description: "Planificar, coordinar, dirigir y supervisar las actividades, recursos y desempeño del departamento, siendo la mejora continua y productividad del mismo la principal meta."
        },
        {
            title: "Desarrollador de Contenidos de Aprendizaje",
            company: "Colegio Calasanz",
            dates: "Abr 2019 - Jul 2019",
            description: "Voluntario, creación de contenido y actividades didácticas para un periodo o campaña de verano trimestral, para la comunidad de jóvenes de alto riesgo o falta de oportunidades, en la fundación Calasanz del sector La Puya de Arroyo Hondo, D.N."
        },
        { 
            title: "Representante de ventas telefónicas", 
            company: "Claro", 
            dates: "Oct 2017 - Nov 2018",
            description: "Tomar las llamadas de los clientes para reclamaciones, ventas, adiciones y ampliación de los planes de la empresa según el programa." 
        },
        { 
            title: "Analista de inteligencia", 
            company: "Policia Nacional", 
            dates: "Ene 2014 - Ago 2017",
            description: "Determinar puntos de riesgo con la información recopilada, para llegar a una conclusión de dónde interactuar para tener mejores resultados."
        }
    ],

    education: [
        { degree: "Ingeniería en Software", institution: "UAPA", dates: "2020 - Actual" },
        { degree: "Licenciatura en Economía", institution: "UASD", dates: "2023 - Actual" },
        { degree: "Master Customer Experience Design", institution: "International Customer Service Association Latinoamérica", dates: "Abr 2023 - Jul 2023" },
        { degree: "Excel Nivel Profesional", institution: "Escuela Técnica de Negocios", dates: "Mar 2023 - May 2023" },
        { degree: "Diplomado en riesgos y seguros de daños", institution: "INAMS", dates: "Oct 2021 - Mar 2022" },
        { degree: "Analista de Inteligencia", institution: "Policia Nacional", dates: "Ene 2022 - Mar 2022" },
        { degree: "Diplomado en Python", institution: "UBITS", dates: "Marzo 2023" }
    ],
    courses: {
        basic: [
            "Claves para ser un Innovation Champion",
            "Orientación a resultados: del plan a la acción",
            "Técnicas innovadoras de servicio al cliente",
            "Team Storming: Técnica para la innovación",
            "El trabajo en equipo y la gestión de conflictos",
            "¿Cómo desarrollar el sentido del compromiso?",
            "Fundamentos de servicio al cliente 2.0",
            "Cinco habilidades para ser innovador",
            "Genera ideas con la técnica de analogías forzadas",
            "Brainwriting, más allá del brainstorming",
            "Introducción a la innovación corporativa"
        ],
        specialized: [
            "Diplomado en Python Básico", 
            "Programación Informática Básica",
            
        ]
    }
};

// Cargar la sección de contacto por defecto al cargar la página
showSection('contact');

// Crear elementos HTML para cada sección
const contentDiv = document.getElementById('content');
Object.keys(cvData).forEach(sectionId => {
    const sectionDiv = document.createElement('div');
    sectionDiv.id = sectionId + '-section';
    sectionDiv.classList.add('section-content');

    if (sectionId === 'contact') {
        sectionDiv.innerHTML = `
            <h3>Contacto</h3>
            <p>Teléfono: ${cvData.contact.phone}</p>
            <p>Correo: ${cvData.contact.email}</p>
            <p>Dirección: ${cvData.contact.address}</p>
        `;
    } else if (sectionId === 'profile') {
        sectionDiv.innerHTML = `
            <h3>Perfil Profesional</h3>
            <p>${cvData.profile}</p>
        `;
    } else if (sectionId === 'experience') {
        let experienceHtml = '<h3>Experiencia Laboral</h3>';
        cvData.experience.forEach(exp => {
            experienceHtml += `
                <h4>${exp.title} | ${exp.company}</h4>
                <p>${exp.dates}</p>
                <p>${exp.description}</p>
            `;
        });
        sectionDiv.innerHTML = experienceHtml;
    } else if (sectionId === 'education') {
        let educationHtml = '<h3>Estudios Superiores</h3>';
        cvData.education.forEach(edu => {
            educationHtml += `
                <h4>${edu.degree} | ${edu.institution}</h4>
                <p>${edu.dates}</p>
            `;
        });
        sectionDiv.innerHTML = educationHtml;
    } else if (sectionId === 'courses') {
        let coursesHtml = '<h3>Cursos</h3>';
        coursesHtml += '<h4>Especializados</h4><ul>';
        cvData.courses.specialized.forEach(course => {
            coursesHtml += `<li>${course}</li>`;
        });
        coursesHtml += '</ul><h4>Básicos</h4><ul>';
        cvData.courses.basic.forEach(course => {
            coursesHtml += `<li>${course}</li>`;
        });
        coursesHtml += '</ul>';
        sectionDiv.innerHTML = coursesHtml;
    }

    contentDiv.appendChild(sectionDiv);
});
