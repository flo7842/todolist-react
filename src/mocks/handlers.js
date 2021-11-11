import { setupWorker, rest } from 'msw'

export const handlers = [
    rest.post('/login', (req, res, ctx) => {
        sessionStorage.setItem('is-authenticated', 'true')

        return res(
            ctx.status(200),
        )
    }),

    rest.get('/user', (req, res, ctx) => {
        const isAuthenticated = sessionStorage.getItem('is-authenticated')

        if(!isAuthenticated) {
            return res(
                ctx.status(403),
                ctx.json({
                    errorMessage: 'Not authorized',
                }),
            )
        }

        return res(
            ctx.status(200),
            ctx.json({
                username: 'admin',
            }),
        )
    }),

    rest.post('/task', (req, res, ctx) => {
        
        
        return res(
            ctx.json(req.body)
        )
    }),

    rest.put('/task/:id', (req, res, ctx) => {
        
        
        return res(
            ctx.json(req.body)
        )
    })
]