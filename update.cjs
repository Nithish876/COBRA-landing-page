const fs = require('fs');
const file = 'src/components/hero/CyberVaultCard.tsx';
let data = fs.readFileSync(file, 'utf8');
data = data.replace(/fill="var\(--bg-card\)"/g, 'fill="#FFFFFF"');
fs.writeFileSync(file, data);
console.log('Replaced var(--bg-card) with #FFFFFF');
