const fs = require('fs')


const files = fs.readdirSync('widgets/')
const config = {
  widgets: [],
  datasets: []
}

files.forEach(file => {
  if (file.endsWith('.json')) {
    const bufferContent = fs.readFileSync('widgets/' + file)
    const data = JSON.parse(bufferContent.toString())
    config.widgets.push(data.widget)
    if (data.dataset) {
      config.datasets.push(data.dataset)
    }
  }
})

fs.writeFileSync('js/script.js', 'var config = ' + JSON.stringify(config, null, 2))
