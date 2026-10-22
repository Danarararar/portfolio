import type { Certificate, Project, Skill } from "@/types/project";

export const profile = {
  name: "Danar Abdi Manaf Hamid",
  handle: "danar.dev",
  role: "Informatics Engineering Student",
  tagline: "Designing algorithms & intelligent systems.",
  bio: "An Informatics Engineering undergraduate student at Institut Teknologi Sepuluh Nopember (ITS) with a strong foundation in logic, problem-solving, and algorithms, shaped by my journey as a 2-time OSN-P Informatics Finalist (2024 & 2025). I have a deep passion for Artificial Intelligence, Machine Learning, and Cloud Computing, which led me to complete several professional certifications from Dicoding, covering Python, Machine Learning, and Gen AI basics. Beyond academics, I’ve honed my leadership and management skills through roles in student organizations (OSPETA) and event budgeting. Excited to navigate my university journey at ITS, collaborate on tech projects, and connect with peers and industry professionals",
  email: "danarabdimanaf012@gmail.com", // TODO: ganti dengan email publikmu
  github: "https://github.com/danarararar", // TODO
  linkedin: "https://www.linkedin.com/in/danar-abdi", // TODO
};

// TODO: ganti dengan proyek aslimu
export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    image: "/projects/portfolio-website.png",
    summary: "Personal portfolio built with Next.js and TypeScript.",
    description:
      "Membuat portofolio website dengan Next.js dan TypeScript memberikan fondasi yang kuat untuk menampilkan kemampuan teknis secara profesional dan responsif. Menggunakan pendekatan typed data layer Portfolio Website memastikan setiap data proyek dan informasi personal terstruktur dengan aman, sementara styling berbasis Tailwind CSS mendukung desain dark mode yang minimalis namun berkarakter kuat. Dengan penerapan tata letak grid yang presisi, halaman portofolio ini tidak hanya menampilkan detail proyek secara dinamis, tetapi juga mencerminkan identitas seorang engineer yang fokus pada performa dan estetika kode yang bersih.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Responsive layout", "Typed data layer", "Dynamic detail pages"],
  },
  {
    slug: "ml-classifier",
    title: "ML Classifier",
    summary: "A small machine learning project in Python.",
    image: "/projects/ml-classifier.png",
    description:
      "Proyek dalam portofolio ML Classifier ini menggunakan bahasa pemograman Python dan pustaka scikit-learn untuk membangun serta mengoptimalkan model klasifikasi machine learning. Proses pengerjaannya mencakup penentuan rentang parameter hiperparameter (hyperparameter tuning) menggunakan GridSearchCV dengan validasi silang lima lipatan (cv = 5) untuk mencari kombinasi terbaik, melatih model RandomForestClassifier menggunakan fungsi .fit() pada data latih (X_train dan y_train), serta mengevaluasi hasilnya untuk menampilkan estimator terbaik (best_estimator_) guna meningkatkan akurasi prediksi.",
    tech: ["Python", "scikit-learn"],
    features: ["Data preprocessing", "Model training", "Evaluation"],
  },
  {
    slug: "turtle-multiplayer",
    title: "Turtle Multiplayer",
    image: "/projects/turtle-multiplayer.png",
    summary: "Two-player turtlesim game over WebSocket.",
    description:
      "Di proyek ROS 2 ini, membuat kontrol terhadap dua turtle secara bersamaan tetapi di turtle 2(abdi) mengalami inverse terhadap pergerakan turtle 1(danar). turtle 1 digerakan dengan keyboard namun untuk turtle 2 digerakan oleh turtle 1 namun mengalami inverse. Identitas dari masing masing turtle di bedakan agar mudah di lihat perbedaan turtle 2 dan turtle 1 dari warna garis lintasan dan ketebalan",
    tech: ["ROS 2", "TypeScript", "WebSocket"],
    features: ["Two players", "Gateway server", "Real-time control"],
  },
];

export const certificates: Certificate[] = [
  { title: "Python Fundamentals", issuer: "Dicoding" },
  { title: "Machine Learning", issuer: "Dicoding" },
  { title: "AWS Cloud & Generative AI", issuer: "Dicoding" },
  { title: "AI Basics", issuer: "Dicoding" },
];

export const skills: Skill[] = [
  { name: "Python", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Machine Learning", category: "AI/ML" },
  { name: "AWS", category: "Cloud" },
  { name: "React", category: "Web" },
  { name: "Next.js", category: "Web" },
  { name: "Tailwind CSS", category: "Web" },
  { name: "Git & GitHub", category: "Tools" },
];

export const achievements = [
  "OSN-P Informatics finalist, 2024",
  "OSN-P Informatics finalist, 2025",
];
