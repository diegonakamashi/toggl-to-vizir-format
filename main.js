const fs = require('fs')
const csv = require('fast-csv')
const moment = require('moment')
const CSV_PATH = '/Users/diegonakamashi/Desktop/nov.csv'
const GENERATE_FILE_PATH = '/tmp/toggle.csv'

const START_DAY_INDEX = 'Start date'
const START_INDEX = 'Start time'
const END_INDEX = 'End time'
const CLIENT = 'Client'
const DESCRIPTION = 'Description'

const stream = fs.createReadStream(CSV_PATH)

fs.writeFileSync(GENERATE_FILE_PATH, '')
  const csvStream = csv({headers: true})
        .on('data', (data) => {
          const day = moment(data[START_DAY_INDEX]).format('D/M/Y')
          console.log(data)
          const start = data[START_INDEX]
          const end = data[END_INDEX]
          const client = data[CLIENT]
          const project = data['Project']
          const description = data[DESCRIPTION]
          fs.appendFileSync(GENERATE_FILE_PATH, `${day}\t${start}\t${end}\t\t${client}\t${project}\t${description}\n`)
        })
        .on('end', (data) => {
          console.log('end', data)
        })

stream.pipe(csvStream)


