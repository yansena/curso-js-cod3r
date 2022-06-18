const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrona...
fs.readFile(caminho, 'utf-8', (error, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
});

const config = require('./arquivo.json')
console.log(config.db)


fs.readdir(__dirname, (error, arquivos) => {
  console.log('Conteudo da pasta')
  console.log(arquivos)
})