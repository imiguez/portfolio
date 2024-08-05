import { ProgramIconBtnInterface } from "@/interfaces/MookInterfaces";

export const ProjectsMock: ProgramIconBtnInterface[] = [
    {
        title: "Beerbee",
        titleColor: "black",
        description: "Beerbee was the first project that I made during the career with a partner. The idea was to create a web about something (beer in my case) and make a basic CRUD. The host provider was the university and it stopped to work so the CRUD also doesn't work.",
        icon: "img/Projects/beerbee.png",
        loading_icon: 'img/Projects/beerbee_opt.png',
    },
    {
        title: "Paint & Filters",
        titleColor: "black",
        description: "This university project started as a basic paint clone, but then we had to implement filters to apply to the canvas.",
        icon: "img/Projects/paint.png",
        loading_icon: 'img/Projects/paint_opt.png',
    },
    {
        title: "Runner Game",
        titleColor: "black",
        description: "This university project is about a runner game in 2D where the main focus was on the parallax effect on the background environment images.",
        icon: "img/Projects/runnerGame.png",
        loading_icon: 'img/Projects/runnerGame_opt.png',
    },
    {
        title: "Ride",
        titleColor: "black",
        description: "My biggest programming project for the moment (2024). Developed a React Native mobile application for on-demand taxi booking, incorporating real-time location tracking through WebSocket integration to optimize user experience.\nIn order to develop this app I have made use of the following technologies mainly:\n - Backend: NestJS, Socket.io, Redis, PostgreSQL, Docker.\n- Frontend: React Native, Expo.\n - Deployment: AWS, SSL Certificate, Domain connections and emails, Dockerhub, Github.",
        icon: "img/Projects/ride.png",
        loading_icon: 'img/Projects/ride_opt.png',
    },
];