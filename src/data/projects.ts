import pos from "@/../public/assets/images/pos.png";
import savile from "@/../public/assets/images/savile.png";
import shoes from "@/../public/assets/images/shoe.jpeg";

export const projects = [
  {
    id: 1,
    title: "COFFEE SHOP MANAGEMENT",
    description: "Modern admin interface with intuitive charts and data analysis features.",
    image: pos,
    tags: ["NextJS", "NestJS", "PostgreSQL", "CI/CD","AWS EC2" ,"AWS S3", "MUI", "Tailwind"],
    demoUrl: "https://admin-bpc-pos.nibies.space/",
    codeUrl: "https://github.com/BPC-POS/admin"
  },
  {
    id: 2,
    title: "Shoes Store",
    description: "Shoes Shop is an online shoe retail platform designed to provide customers with a modern and convenient shopping experience. The project focuses on clear product display, quick search, smart shopping cart and integrated automatic order management system. With a diverse product inventory, from famous brands to custom-designed shoe lines, Shoes Shop meets all customers' style and usage needs.",
    image: shoes,
    tags: ["NextJS", "ExpressJS", "MongoDB", "Cloudinary", "Tailwind", "Shadcn-UI"],
    demoUrl: "https://shoes-store-fe-alpha.vercel.app/home",
    codeUrl: "https://github.com/phuoc02032004/shoes-store-fe"
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