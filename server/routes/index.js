const Router = require('koa-router')
const router = new Router()

router.get('/', ctx => {
  console.log('test!!!!')
  ctx.render('index')
})

router.get('/login', async ctx => {
  console.log('login page test!!!!')
  await ctx.render('login.html')
})

module.exports = router
