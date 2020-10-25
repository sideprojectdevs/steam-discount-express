// ramdom message reply as placeholder

module.exports = function random_reply(msg) {
  dice = Math.floor(Math.random() * 10);
  let reply = "哩洗勒公三小"
  switch(true){
    case (msg == undefined):
      break
    case (dice == 0):
      reply = `我是誰? 我在哪? "${msg}" 是甚麼?`
      break
    case (dice < 4):
      reply = `你好哇冒險者! 原來你叫做 "${msg}" 呀!`
      break
    case (dice < 7):
      reply = `好喔~ 我不會把 "${msg}" 告訴別人的...`
      break
    case (dice < 10):
      reply = `本台抄收 "${msg}"，感謝貴台~`
      break
  }
  return reply
}