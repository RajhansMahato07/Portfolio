const fs = require('fs');
const cert1 = fs.readFileSync('certificate/cert1.jpeg').toString('base64');
const cert2 = fs.readFileSync('certificate/cert2.jpeg').toString('base64');
const cv = fs.readFileSync('public/Rajhans_Mahato_CV.pdf').toString('base64');

const content = `export const CERT_1_BASE64 = 'data:image/jpeg;base64,${cert1}';
export const CERT_2_BASE64 = 'data:image/jpeg;base64,${cert2}';
export const CV_PDF_BASE64 = 'data:application/pdf;base64,${cv}';
`;

fs.writeFileSync('src/data/assetsBase64.ts', content);
console.log('Successfully generated src/data/assetsBase64.ts');
