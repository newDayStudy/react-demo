const Koa = require('koa');
const router = require('koa-router')()
const app = new Koa();
const axios = require('axios')
app.use( async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200;
    } else {
        await next();
    }
})

router.get('/joke', async ctx => {
    const res_data = await axios.get('http://v.juhe.cn/joke/randJoke.php', {
        params: {
            ...ctx.query,
            key: '6a998882d490d40c2cfa200b293179b2'
        }
    })
    console.log(res_data)
    ctx.body = res_data.data
})

router.get('/catalog', async ctx => {
    const res_data = await axios.get('http://apis.juhe.cn/goodbook/catalog', {
        params: {
            key: '7ce18425782c27b05e7df153349d98e7'
        }
    })
    ctx.body = res_data.data
})

/**
 * catalog_id  目录编号
 * pn	int	数据返回起始
 * rn	int	数据返回条数，最大30
 */
router.get('/query', async ctx => {
    const res_data = await axios.get('http://apis.juhe.cn/goodbook/query', {
        params: {
            ...ctx.query,
            key: '7ce18425782c27b05e7df153349d98e7'
        }
    })
    ctx.body = res_data.data
})

router.get('/shgold', async ctx => {
    const res_data = await axios.get('http://web.juhe.cn/finance/gold/shgold', {
        params: {
            key: '63825c907e6063d9bbbb385e819baea2'
        }
    })
    ctx.body = res_data.data
})

/**
 * 新闻头条
 * type 否 支持类型top(推荐,默认)guonei(国内)guoji(国际)yule(娱乐)tiyu(体育)junshi(军事)keji(科技)caijing(财经)youxi(游戏)qiche(汽车)jiankang(健康)
 * page 否 当前页数, 默认1, 最大50
 * page_size 否  每页返回条数, 默认30 , 最大30
 * is_filter 否 是否只返回有内容详情的新闻, 1:是, 默认0
 */
router.get('/news', async ctx => {
    const res_data = await axios.get('http://v.juhe.cn/toutiao/index', {
        params: {
            key: 'bde05e4be6b136d372042a30d71cbc19'
        }
    })
    ctx.body = res_data.data
})

/**
 * 娱乐新闻
 * num	int	否	返回数量1-50，默认10
 * page	int	否	翻页，默认1
 * rand	int	否	随机获取,默认1
 * word	string	否	检索关键词
 */
router.get('/news/detail', async ctx => {
    const query = ctx.query || {}
    const res_data = await axios.get('http://apis.juhe.cn/fapigx/huabian/query', {
        params: {
            ...query,
            key: 'bde05e4be6b136d372042a30d71cbc19'
        }
    })
    ctx.body = res_data.data
})

/**
 * 旅游景区大全
 * word	string	是	景区关键字
 * num	int	否	返回数量
 * page	int	否	翻页
 * province	string	否	按景点省区检索
 * city	string	否	按景点城市检索
 */
router.get('/scenic', async ctx => {
    const query = ctx.query || {}
    const res_data = await axios.get('http://apis.juhe.cn/fapigx/scenic/query', {
        params: {
            ...query,
            key: 'f3bac9aa2417612621a1970a1bfeadc5'
        }
    })
    ctx.body = res_data.data
})

/**
 * 每日简报
 */
router.get('/bulletin', async ctx => {
    const res_data = await axios.get('http://apis.juhe.cn/fapigx/bulletin/query', {
        params: {
            key: '99f3c3e08147e9409729c798ba51b9d2'
        }
    })
    ctx.body = res_data.data
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(4000,() => {
    console.log('server is listening 4000')
})
