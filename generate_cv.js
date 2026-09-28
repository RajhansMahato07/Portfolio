// generate_cv.js
import fs from 'fs';
import path from 'path';

function createPdf() {
  const content = [
    "%PDF-1.4",
    "1 0 obj",
    "<< /Type /Catalog /Pages 2 0 R >>",
    "endobj",
    "2 0 obj",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "endobj",
    "3 0 obj",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    "endobj",
    "4 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    "endobj",
    "5 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "endobj"
  ];

  const streamLines = [
    "BT",
    "/F1 22 Tf 50 780 Td (RAJHANS MAHATO) Tj",
    "/F2 11 Tf 0 -20 Td (Full Stack Developer | B.Tech Information Technology Student) Tj",
    "0 -15 Td (Location: Durgapur, West Bengal, India | Phone: +91 7979044117) Tj",
    "0 -15 Td (Email: rdxraj3141@gmail.com | GitHub: https://github.com/RajhansMahato07) Tj",
    
    "/F1 13 Tf 0 -35 Td (PROFESSIONAL SUMMARY) Tj",
    "/F2 10 Tf 0 -18 Td (B.Tech Information Technology student and Full Stack Developer passionate about building modern) Tj",
    "0 -14 Td (web applications, learning new technologies, and solving real-world computational problems.) Tj",

    "/F1 13 Tf 0 -30 Td (EDUCATION) Tj",
    "/F1 10 Tf 0 -18 Td (B.Tech in Information Technology | 2023 - 2027) Tj",
    "/F2 10 Tf 0 -14 Td (Bengal College of Engineering & Technology, Durgapur, West Bengal) Tj",
    "0 -14 Td (Status: Current Student | Focus: Data Structures, Web Technologies, Database Systems) Tj",
    "/F1 10 Tf 0 -20 Td (Higher Secondary 12th - Science Stream | 2022 - 2023) Tj",
    "/F2 10 Tf 0 -14 Td (DGSS Intercollege, Bandgora, Bokaro, Jharkhand) Tj",

    "/F1 13 Tf 0 -30 Td (EXPERIENCE & TRAINING) Tj",
    "/F1 10 Tf 0 -18 Td (Training & Internship - Artificial Intelligence & Machine Learning / Full Stack) Tj",
    "/F2 10 Tf 0 -14 Td (VDT EDU TANTR VENTURES PVT LTD - Edu Tantr | 3 Months Online / Remote) Tj",
    "0 -14 Td (Offer Reference: IOL-EDUJ1632 | Active skill development in algorithms, backend & modern tooling) Tj",

    "/F1 13 Tf 0 -30 Td (TECHNICAL SKILLS) Tj",
    "/F2 10 Tf 0 -18 Td (Frontend: React.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS) Tj",
    "0 -14 Td (Backend: Node.js, Express.js, REST APIs, System Architecture) Tj",
    "0 -14 Td (Databases: MongoDB, SQL, Schema Design) Tj",
    "0 -14 Td (Languages: JavaScript, TypeScript, C/C++, Python) Tj",
    "0 -14 Td (Tools & Workflow: Git, GitHub, VS Code, Postman, Vite, npm) Tj",

    "/F1 13 Tf 0 -30 Td (VERIFIED CERTIFICATES) Tj",
    "/F2 10 Tf 0 -18 Td (1. Internship Offer & Verification Letter - Edu Tantr - VDT Edu Tantr Ventures Pvt Ltd) Tj",
    "0 -14 Td (2. Terms of Engagement & Verification Record - Edu Tantr) Tj",
    "ET"
  ];

  const streamContent = streamLines.join("\n");
  const streamLength = Buffer.byteLength(streamContent);

  const obj6 = [
    `6 0 obj`,
    `<< /Length ${streamLength} >>`,
    `stream`,
    streamContent,
    `endstream`,
    `endobj`
  ];

  const allObjects = [...content, ...obj6];
  
  // Calculate offsets for xref table
  let currentOffset = 0;
  const offsets = [0]; // 0000000000 65535 f
  
  const textBuffer = [];
  for (const item of allObjects) {
    if (item.endsWith(" 0 obj")) {
      offsets.push(currentOffset);
    }
    const chunk = item + "\n";
    textBuffer.push(chunk);
    currentOffset += Buffer.byteLength(chunk);
  }

  const xrefStart = currentOffset;
  let xref = `xref\n0 ${offsets.length}\n0000000000 65535 f \n`;
  for (let i = 1; i < offsets.length; i++) {
    xref += String(offsets[i]).padStart(10, '0') + " 00000 n \n";
  }

  const trailer = [
    xref,
    "trailer",
    `<< /Size ${offsets.length} /Root 1 0 R >>`,
    "startxref",
    String(xrefStart),
    "%%EOF\n"
  ].join("\n");

  textBuffer.push(trailer);
  const finalPdf = textBuffer.join("");

  const outPath = path.resolve('public', 'Rajhans_Mahato_CV.pdf');
  fs.writeFileSync(outPath, finalPdf);
  console.log('Successfully created', outPath);
}

createPdf();
