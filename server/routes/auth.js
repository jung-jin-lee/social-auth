const Router = require('koa-router')
const router = new Router({
    prefix: '/auth'
})

const passportFacebook = require('../auth/facebook')

router.get('/login', ctx => {
    ctx.body = 'login fail'
})
router.get('/facebook', passportFacebook.authenticate('facebook'))
router.get('/facebook/callback', passportFacebook.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }),
ctx => {
    console.log('fail~~~')
})

module.exports = router;
