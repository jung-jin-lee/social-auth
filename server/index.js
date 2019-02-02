const path = require('path')
const logger = require('koa-logger')
const serve = require('koa-static')
const views = require('koa-views')
const Koa = require('koa')
const app = new Koa()
const passport = require('koa-passport')
const authRouter = require('./routes/auth')
const pageRouter = require('./routes/index')

app.use(logger())
// app.use(ctx => {
//     ctx.body = 'Hello World'
// })

console.log(
    `path.resolve(__dirname, '../public'):`, path.resolve(__dirname, '../public')
)

// app.use((ctx, next) => {
//     console.log('test', ctx.req.url)
//     return next()
// })


app.use(serve(path.resolve(__dirname, '../public')))
app.use(views(path.resolve(__dirname, '../public'), { map: {html: 'nunjucks' }}))

app.use(passport.initialize());

app.use(authRouter.routes())
app.use(authRouter.allowedMethods())
app.use(pageRouter.routes())
app.use(pageRouter.allowedMethods())

// app.use(async ctx => {
//     await ctx.render('index')
//     console.log('ctx.request::::', ctx.request)
// })

app.use(ctx => {
    console.log('ctx.request::::', ctx.request)
    const pageName = ctx.req.url === '/' ? 'index' : ctx.request.url.substring(1)
    console.log('pageName:', pageName)
    ctx.render(pageName)
    
})

app.listen(3000, () => {
    console.log('server listening')
})