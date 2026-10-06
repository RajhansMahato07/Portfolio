import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  // Standard A4: 595.28 x 841.89 points
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const page = pdfDoc.addPage([pageWidth, pageHeight]);

  const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const marginX = 42;
  const contentWidth = pageWidth - 2 * marginX;
  let currentY = pageHeight - 38;

  const colorBlack = rgb(0.1, 0.1, 0.1);
  const colorDarkGray = rgb(0.2, 0.2, 0.2);
  const colorDivider = rgb(0.3, 0.3, 0.3);

  // Helper to draw horizontal line divider
  function drawDivider(y) {
    page.drawLine({
      start: { x: marginX, y },
      end: { x: pageWidth - marginX, y },
      thickness: 0.75,
      color: colorDivider,
    });
  }

  // Helper to wrap text into multiple lines
  function wrapText(text, font, size, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const width = font.widthOfTextAtSize(testLine, size);
      if (width <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  // 1. HEADER (Centered)
  const nameText = 'Rajhans Mahato';
  const nameSize = 22;
  const nameWidth = timesBold.widthOfTextAtSize(nameText, nameSize);
  page.drawText(nameText, {
    x: (pageWidth - nameWidth) / 2,
    y: currentY,
    size: nameSize,
    font: timesBold,
    color: colorBlack,
  });
  currentY -= 17;

  const subTitle = 'WEB DEVELOPER | B.TECH INFORMATION TECHNOLOGY';
  const subSize = 10.5;
  const subWidth = timesBold.widthOfTextAtSize(subTitle, subSize);
  page.drawText(subTitle, {
    x: (pageWidth - subWidth) / 2,
    y: currentY,
    size: subSize,
    font: timesBold,
    color: colorBlack,
  });
  currentY -= 14;

  const contactText = 'Dhanbad, Jharkhand | +91 7979044117 | rajhansmahato1210@gmail.com | github.com/RajhansMahato07';
  const contactSize = 9.5;
  const contactWidth = timesRoman.widthOfTextAtSize(contactText, contactSize);
  page.drawText(contactText, {
    x: (pageWidth - contactWidth) / 2,
    y: currentY,
    size: contactSize,
    font: timesRoman,
    color: colorDarkGray,
  });
  currentY -= 10;

  // Header bottom divider
  drawDivider(currentY);
  currentY -= 14;

  // Helper for Section Headers
  function drawSectionHeader(title) {
    page.drawText(title, {
      x: marginX,
      y: currentY,
      size: 11,
      font: timesBold,
      color: colorBlack,
    });
    currentY -= 5;
    drawDivider(currentY);
    currentY -= 11;
  }

  // 2. PROFESSIONAL SUMMARY
  drawSectionHeader('PROFESSIONAL SUMMARY');
  const summaryText =
    'B.Tech Information Technology student with hands-on exposure to web development fundamentals and an interest in building responsive, user-friendly web applications. Familiar with HTML, CSS, JavaScript, Bootstrap, React, Git and GitHub, with working knowledge of REST API development, Node.js, Express.js, MongoDB and SQL. Completed an internship with EDU TANTR and developed practical web projects using modern frontend and backend technologies. Seeking an entry-level Web Developer role to contribute to real-world projects and grow as a full-stack developer.';
  
  const summaryLines = wrapText(summaryText, timesRoman, 9.5, contentWidth);
  for (const line of summaryLines) {
    page.drawText(line, {
      x: marginX,
      y: currentY,
      size: 9.5,
      font: timesRoman,
      color: colorDarkGray,
    });
    currentY -= 12.5;
  }
  currentY -= 4;

  // 3. TECHNICAL SKILLS
  drawSectionHeader('TECHNICAL SKILLS');
  const skills = [
    { label: 'Languages: ', val: 'HTML5, CSS3, JavaScript, C, Java, Python, SQL' },
    { label: 'Frontend: ', val: 'React.js, Bootstrap, Responsive Web Design, DOM Manipulation' },
    { label: 'Backend: ', val: 'Node.js, Express.js, REST APIs' },
    { label: 'Database: ', val: 'MongoDB, MySQL/SQL' },
    { label: 'Tools: ', val: 'Git, GitHub, VS Code, npm' },
    { label: 'Core CS: ', val: 'OOP, DBMS, Data Structures, Operating Systems, Computer Networks' },
  ];

  for (const skill of skills) {
    page.drawText(skill.label, {
      x: marginX,
      y: currentY,
      size: 9.5,
      font: timesBold,
      color: colorBlack,
    });
    const labelWidth = timesBold.widthOfTextAtSize(skill.label, 9.5);
    page.drawText(skill.val, {
      x: marginX + labelWidth,
      y: currentY,
      size: 9.5,
      font: timesRoman,
      color: colorDarkGray,
    });
    currentY -= 12.5;
  }
  currentY -= 4;

  // 4. INTERNSHIP EXPERIENCE
  drawSectionHeader('INTERNSHIP EXPERIENCE');
  page.drawText('EDU TANTR \u2014 AI/ML Intern | Aug 2025 \u2013 Nov 2025', {
    x: marginX,
    y: currentY,
    size: 10,
    font: timesBold,
    color: colorBlack,
  });
  currentY -= 13;

  const internshipBullets = [
    'Completed a structured internship covering Python-based machine learning fundamentals and practical implementation.',
    'Worked on applied mini-projects involving data preparation, model building, testing and interpretation of results.',
    'Strengthened problem-solving, programming and software development practices through hands-on assignments.',
  ];

  for (const b of internshipBullets) {
    const lines = wrapText(`\u2022 ${b}`, timesRoman, 9.5, contentWidth - 8);
    for (let i = 0; i < lines.length; i++) {
      page.drawText(lines[i], {
        x: marginX + (i === 0 ? 0 : 8),
        y: currentY,
        size: 9.5,
        font: timesRoman,
        color: colorDarkGray,
      });
      currentY -= 12;
    }
  }
  currentY -= 4;

  // 5. PROJECTS
  drawSectionHeader('PROJECTS');

  // Project 1: ShopEase
  page.drawText('ShopEase \u2014 Responsive E-Commerce Web Application', {
    x: marginX,
    y: currentY,
    size: 10,
    font: timesBold,
    color: colorBlack,
  });
  currentY -= 12.5;

  const shopEaseBullets = [
    'Developed a responsive e-commerce website with product listing, category filtering, search, cart and checkout UI.',
    'Built reusable React components and responsive layouts using HTML5, CSS3, JavaScript and Bootstrap.',
    'Implemented a Node.js and Express.js backend with REST APIs for products, users and order-related operations.',
    'Used MongoDB for storing product and order data and Git/GitHub for version control.',
  ];

  for (const b of shopEaseBullets) {
    const lines = wrapText(`\u2022 ${b}`, timesRoman, 9.5, contentWidth - 8);
    for (let i = 0; i < lines.length; i++) {
      page.drawText(lines[i], {
        x: marginX + (i === 0 ? 0 : 8),
        y: currentY,
        size: 9.5,
        font: timesRoman,
        color: colorDarkGray,
      });
      currentY -= 11.5;
    }
  }

  const shopEaseTech = 'Tech: React.js, JavaScript, HTML5, CSS3, Bootstrap, Node.js, Express.js, MongoDB, Git, GitHub';
  page.drawText('Tech: ', {
    x: marginX,
    y: currentY,
    size: 9,
    font: timesBold,
    color: colorBlack,
  });
  page.drawText(shopEaseTech.replace('Tech: ', ''), {
    x: marginX + timesBold.widthOfTextAtSize('Tech: ', 9),
    y: currentY,
    size: 9,
    font: timesItalic,
    color: colorDarkGray,
  });
  currentY -= 15;

  // Project 2: StudentHub
  page.drawText('StudentHub \u2014 Student Management & Notice Portal', {
    x: marginX,
    y: currentY,
    size: 10,
    font: timesBold,
    color: colorBlack,
  });
  currentY -= 12.5;

  const studentHubBullets = [
    'Built a full-stack student portal for managing student profiles, notices and academic information through a clean web interface.',
    'Created responsive React-based pages with reusable components, form validation and client-side navigation.',
    'Developed REST APIs with Node.js and Express.js and connected the application with a MongoDB database.',
    'Added basic search, filtering and CRUD functionality to improve usability and data management.',
  ];

  for (const b of studentHubBullets) {
    const lines = wrapText(`\u2022 ${b}`, timesRoman, 9.5, contentWidth - 8);
    for (let i = 0; i < lines.length; i++) {
      page.drawText(lines[i], {
        x: marginX + (i === 0 ? 0 : 8),
        y: currentY,
        size: 9.5,
        font: timesRoman,
        color: colorDarkGray,
      });
      currentY -= 11.5;
    }
  }

  const studentHubTech = 'Tech: React.js, JavaScript, HTML5, CSS3, Bootstrap, Node.js, Express.js, MongoDB, Git, GitHub';
  page.drawText('Tech: ', {
    x: marginX,
    y: currentY,
    size: 9,
    font: timesBold,
    color: colorBlack,
  });
  page.drawText(studentHubTech.replace('Tech: ', ''), {
    x: marginX + timesBold.widthOfTextAtSize('Tech: ', 9),
    y: currentY,
    size: 9,
    font: timesItalic,
    color: colorDarkGray,
  });
  currentY -= 14;

  // 6. EDUCATION
  drawSectionHeader('EDUCATION');
  const eduItems = [
    {
      bold: 'B.Tech in Information Technology',
      rest: ' \u2014 Bengal College of Engineering and Technology, Durgapur | 2023 \u2013 2027',
    },
    {
      bold: 'Class XII',
      rest: ' \u2014 DGSS Inter College Bandgora, Bokaro | 2023 | 71%',
    },
    {
      bold: 'Class X',
      rest: ' \u2014 TATA DAV School | 2019 | 70%',
    },
  ];

  for (const item of eduItems) {
    page.drawText(item.bold, {
      x: marginX,
      y: currentY,
      size: 9.5,
      font: timesBold,
      color: colorBlack,
    });
    const bWidth = timesBold.widthOfTextAtSize(item.bold, 9.5);
    page.drawText(item.rest, {
      x: marginX + bWidth,
      y: currentY,
      size: 9.5,
      font: timesRoman,
      color: colorDarkGray,
    });
    currentY -= 12.5;
  }
  currentY -= 4;

  // 7. CORE COMPETENCIES
  drawSectionHeader('CORE COMPETENCIES');
  const compText = 'Responsive Web Development \u2022 REST API Integration \u2022 CRUD Applications \u2022 Version Control \u2022 Problem Solving \u2022 Team Collaboration';
  page.drawText(compText, {
    x: marginX,
    y: currentY,
    size: 9.5,
    font: timesRoman,
    color: colorBlack,
  });

  const pdfBytes = await pdfDoc.save();
  const pdfBuffer = Buffer.from(pdfBytes);

  // Write to public and dist
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, 'Rajhans_Mahato_Resume.pdf'), pdfBuffer);
  fs.writeFileSync(path.join(publicDir, 'Rajhans_Mahato_CV.pdf'), pdfBuffer);

  const distDir = path.resolve('dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'Rajhans_Mahato_Resume.pdf'), pdfBuffer);
    fs.writeFileSync(path.join(distDir, 'Rajhans_Mahato_CV.pdf'), pdfBuffer);
  }

  // Generate Base64
  const base64Pdf = `data:application/pdf;base64,${pdfBuffer.toString('base64')}`;
  
  // Read existing assetsBase64.ts and update CV_PDF_BASE64
  const assetsFile = path.resolve('src', 'data', 'assetsBase64.ts');
  let assetsContent = fs.readFileSync(assetsFile, 'utf8');
  assetsContent = assetsContent.replace(/export const CV_PDF_BASE64 = '[^']+';/, `export const CV_PDF_BASE64 = '${base64Pdf}';`);
  fs.writeFileSync(assetsFile, assetsContent, 'utf8');

  console.log('Successfully generated resume PDF and updated assetsBase64.ts!');
}

generateResume().catch(err => {
  console.error(err);
  process.exit(1);
});
