// Extracts HOSPITALS / MEMBERS / TREATMENT_GROUPS from js/app.js → JSON.
// Usage: node export_data.js > data_dump.json
const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(path.join(__dirname, 'js', 'app.js'), 'utf-8');
// Cut at first top-level function (line 549: function getTreatmentGroup)
const cutMarker = 'function getTreatmentGroup';
const cutIdx = src.indexOf(cutMarker);
const dataPart = cutIdx > 0 ? src.slice(0, cutIdx) : src;

const wrapped = `${dataPart}\nmodule.exports = { HOSPITALS, MEMBERS, TREATMENT_GROUPS };`;
const tmp = path.join(__dirname, '_tmp_data.js');
fs.writeFileSync(tmp, wrapped);
const { HOSPITALS, MEMBERS, TREATMENT_GROUPS } = require(tmp);
fs.unlinkSync(tmp);

process.stdout.write(JSON.stringify({ HOSPITALS, MEMBERS, TREATMENT_GROUPS }, null, 2));
