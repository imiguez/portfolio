import { TechMockInterface } from "@/interfaces/TechMookInterface";

export const UniversityTechs: TechMockInterface[] = [
    {
        title: "HTML",
        titleColor: "black",
        onDoubleClick: () => {
            //const html = useWindow("www.beerbee.com", activeWindows);
            // return (
            //   <BasicWindow {...html}>

            //   </BasicWindow>
            // )
          //window.open("https://beerbee.neocities.org/", "_blank");
        },
        imgSrc: "img/HTML5_icon.png"
    },
    {
        title: "CSS",
        titleColor: "black",
        onDoubleClick: () => {
          window.open("https://beerbee.neocities.org/", "_blank");
        },
        imgSrc: "img/CSS_icon.png"
    },
    {
        title: "JS",
        titleColor: "black",
        onDoubleClick: () => {
          window.open("https://beerbee.neocities.org/", "_blank");
        },
        imgSrc: "img/JS_icon.png"
    },
    {
        title: "PHP",
        titleColor: "black",
        onDoubleClick: () => {
          window.open("https://github.com/imiguez/TPE-Web-II", "_blank");
        },
        imgSrc: "img/PHP_icon.png"
    },
    {
        title: "Java",
        titleColor: "black",
        onDoubleClick: () => {
          window.open("https://github.com/imiguez/RN-App/tree/main/backend", "_blank");
        },
        imgSrc: "img/JAVA_icon.png"
    },
    {
        title: "MySQL",
        titleColor: "black",
        onDoubleClick: () => {
          //window.open("https://github.com/imiguez/RN-App/tree/main/backend", "_blank");
        },
        imgSrc: "img/MYSQL_icon.png"
    },
    {
        title: "PostgreSQL",
        titleColor: "black",
        onDoubleClick: () => {
          //window.open("https://github.com/imiguez/RN-App/tree/main/backend", "_blank");
        },
        imgSrc: "img/POSTGRESQL_icon.png"
    },
    {
        title: "Docker",
        titleColor: "black",
        onDoubleClick: () => {
          //window.open("https://github.com/imiguez/RN-App/tree/main/backend", "_blank");
        },
        imgSrc: "img/DOCKER_icon.png"
    },
];