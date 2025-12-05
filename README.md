Aceasta este o aplicatie simpla care comprima textul. Adica daca ai "aaabbb", il face "a3b3". Merge si cu emoji-uri si poti sa tragi fisiere direct in pagina.

Cum il pornesti:

- Deschizi terminalul aici.
- Scrii npm install ca sa se traga ce trebuie.
- Scrii npm run dev si intri pe link-ul ala cu localhost.

Cum am facut codul:

- Totul e in folderul src. Am spart aplicatia in mai multe - - - fisiere mici ca sa nu fie tot codul gramada intr-un loc.
- App.jsx: Aici e fisierul principal. Aici tin minte textul scris si tot ce se intampla pe ecran.
- utils/rleLogic.js: Aici e logica matematica. Am facut doua functii, una care comprima si una care decomprima. Chestia interesanta e ca am folosit [...text] in loc de split normal, ca sa nu se strice cand bagi emoji-uri sau caractere ciudate.
- components/FileUpload.jsx: Asta e componenta care te lasa sa faci drag & drop la fisiere text.
- components/TextDisplay.jsx: Sunt doar cele doua casute de text, stanga si dreapta.
- components/Controls.jsx: Doar butoanele, nu fac mare lucru, doar anunta App.jsx cand dai click.
- components/Metrics.jsx: Aici afisez cat a durat compresia si cat loc am salvat. Apare doar la final.

Despre algoritm: Ideea e simpla, numar literele care se repeta. Daca am "aaa", scriu "a3". La decompresie fac invers, citesc litera si numarul si o repet. Am avut grija sa mearga si cu numere mari (gen a12), nu doar cu o cifra.
