import pos from "@/../public/assets/images/pos.png";
import savile from "@/../public/assets/images/savile.png";

export const projects = [
  {
    id: 1,
    title: "COFFEE SHOP MANAGEMENT",
    description: "Modern admin interface with intuitive charts and data analysis features.",
    image: pos,
    tags: ["NextJS", "NestJS", "PostgreSQL", "CI/CD","AWS EC2" ,"AWS S3", "MUI"],
    demoUrl: "https://admin-bpc-pos.nibies.space/",
    codeUrl: "https://github.com/BPC-POS/admin"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Silverware e-commerce platform with shopping cart, checkout and product management features.",
    image: "/project2.jpg",
    tags: ["ReactJS", "ExpressJS", "MongoDB"],
    demoUrl: "https://example.com/demo2",
    codeUrl: "https://github.com/phuoc02032004/Nhom06-CNTT_VAA.git"
  },
  {
    id: 3,
    title: "Savile - LMS",
    description: "Savile LMS is an intuitive and powerful Learning Management System designed to simplify the creation, delivery and tracking of training programs. With a user-friendly interface, Savile LMS helps organizations easily manage learning content, track user progress and evaluate effectiveness, thereby optimizing the training experience and results.",
    image: savile,
    tags: ["ReactJS", "FastAPI", "Tailwind", "PostgreSQL", "AWS EC2", "MUI"],
    demoUrl: "https://lms.savilerto.au/student",
    codeUrl: "https://github.com/phuoc02032004/SAVILE-FE"
  }
]; 