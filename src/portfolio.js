/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
    enabled: true, // set false to disable splash screen
    animation: splashAnimation,
    duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
    animated: true // Set to false to use static SVG
};
const greeting = {
    username: "Namrata Bhattacharya",
    title: "Hi all, I'm Namrata",
    subTitle: emoji(
        "A passionate PhD Research Scholar 🚀 specializing in ML in single-cell cancer genomics, with extensive experience in Big Data, AI, and computational biology."
    ),
    resumeLink: "", // Add your resume link
    displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
    github: "", // Add your GitHub link
    linkedin: "www.linkedin.com/in/namrata-bhattacharya-835aa5111",
    gmail: "namrata.bhattacharya03@gmail.com",
    display: true
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "PASSIONATE RESEARCHER WHO LOVES TO EXPLORE THE INTERSECTION OF BIOLOGY AND TECHNOLOGY",
    skills: [
        emoji("⚡ Experience in Next-Generation Sequencing (NGS) data analysis and developing algorithms for big data."),
        emoji("⚡ Proficient in Machine Learning, Deep Learning, and Big Data platforms such as Apache Hadoop & Spark."),
        emoji("⚡ Skilled in Python, R, Java, C++, and SQL for scientific computing and data analysis.")
    ],
    softwareSkills: [
        {
            skillName: "Hadoop",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "Java",
            fontAwesomeClassname: "fab fa-java"
        },
        {
            skillName: "Python",
            fontAwesomeClassname: "fab fa-python"
        },
        // Add more skills here
    ],
    display: true
};


// Education Section
const educationInfo = {
    display: true,
    schools: [
        {
            schoolName: "Queensland University of Technology",
            logo: require("./assets/images/qut-logo.png"),
            subHeader: "Doctor of Philosophy - PhD, Biomedical Science",
            duration: "2020 - 2023",
            desc: "Focused on advancing the field of biomedical science through cutting-edge research."
        },
        {
            schoolName: "Indraprastha Institute of Information Technology, Delhi",
            logo: require("./assets/images/iiit-delhi.png"),
            subHeader: "Doctor of Philosophy - PhD, Computer Science and Engineering",
            duration: "2020 - 2023",
            desc: "Engaged in innovative research in the field of computer science and engineering."
        },
        {
            schoolName: "University of Calcutta",
            logo: require("./assets/images/cu-logo.png"),
            subHeader: "Master of Technology - MTech, Computer Science and Engineering",
            duration: "2017 - 2019",
            desc: "Specialized in computer science and engineering, focusing on the development of technological solutions."
        },
        {
            schoolName: "University of Calcutta",
            logo: require("./assets/images/cu-logo.png"),
            subHeader: "M.Sc., Computer and Information Science",
            duration: "2015 - 2017",
            desc: "Mastered the disciplines of computer and information science, emphasizing on data analysis and software development."
        },
        {
            schoolName: "Asutosh College",
            logo: require("./assets/images/cu-logo.png"),
            subHeader: "B.Sc. (Honours), Computer Science",
            duration: "2012 - 2015",
            desc: "Acquired a strong foundation in computer science with honours, focusing on programming languages and algorithm development."
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: false,
    experience: [
        {
            Stack: "Data Analysis & Machine Learning",
            progressPercentage: "90%"
        },
        {
            Stack: "Bioinformatics & Computational Biology",
            progressPercentage: "85%"
        },
        {
            Stack: "Software Development (Full Stack)",
            progressPercentage: "80%"
        },
        {
            Stack: "Big Data Technologies",
            progressPercentage: "75%"
        },
        {
            Stack: "Programming Languages",
            progressPercentage: "Python, R, Java, C++, SQL"
        }
    ],
    displayCodersrank: false
};

// Work experience section

const workExperiences = {
    display: true,
    experience: [
        {
            role: "PhD Research Scholar",
            company: "Translational Research Institute Australia",
            companylogo: require("./assets/images/tri-logo.png"), // Add path to institute logo
            date: "March 2022 – Present",
            desc: "Working on computational analysis of transcriptomic data for metastatic prostate cancer research."
        },
        // Add more experiences here
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
        {
            image: require("./assets/images/saayaHealthLogo.webp"),
            projectName: "Saayahealth",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "http://saayahealth.com/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/nextuLogo.webp"),
            projectName: "Nextu",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "http://nextu.se/"
                }
            ]
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
        "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [
        {
            title: "AMSI Travel Grant",
            subtitle:
                "Received AMSI Travel Grant",
            image: require("./assets/images/amsi-logo.png"),
            imageAlt: "AMSI Logo",
            footerLink: [
                // {
                //     name: "Certification",
                //     url: "https://lnkd.in/gwgsNsy3"
                // },
                {
                    name: "Award Letter",
                    url: "https://lnkd.in/gwgsNsy3"
                },
                // {
                //     name: "Google Code-in Blog",
                //     url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                // }
            ]
        },
        // {
        //     title: "Google Assistant Action",
        //     subtitle:
        //         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
        //     image: require("./assets/images/googleAssistantLogo.webp"),
        //     imageAlt: "Google Assistant Action Logo",
        //     footerLink: [
        //         {
        //             name: "View Google Assistant Action",
        //             url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        //         }
        //     ]
        // },

        // {
        //     title: "PWA Web App Developer",
        //     subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
        //     image: require("./assets/images/pwaLogo.webp"),
        //     imageAlt: "PWA Logo",
        //     footerLink: [
        //         { name: "Certification", url: "" },
        //         {
        //             name: "Final Project",
        //             url: "https://pakistan-olx-1.firebaseapp.com/"
        //         }
        //     ]
        // }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle:
        "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [
        {
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description:
                "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description:
                "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [
        {
            title: "SCellBOW- a novel computational method for conducting algebraic operations on tumor phenotypes, at ABACBS - Australian Bioinformatics and Computational Biology Society",
            subtitle: "ABACBS 2023",
            // slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.linkedin.com/posts/namrata-bhattacharya-835aa5111_abacbs2023-cancerresearch-bioinformatics-activity-7144181659674816513-vd3Y?utm_source=share&utm_medium=member_desktop"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
        "",
    number: "",
    email_address: "namrata.bhattacharya03@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
    illustration,
    greeting,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails,
    isHireable
};
