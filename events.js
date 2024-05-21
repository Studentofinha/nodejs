const EventEmitter=require('events')

const celebrities=new EventEmitter()

celebrities.on('race win', ()=>{
    console.log('Congratulations you have won the race')
})

celebrities.on('race win', ()=>{
    console.log('I could have done too')
})

celebrities.on('race lose', ()=>{
    console.log('You lost the race')
})


celebrities.emit('race win')
celebrities.emit('race lose')
