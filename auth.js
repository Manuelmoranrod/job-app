


// function authUser (req, res, next) {
//     if (req.body.user == null) {
//         res.status(400)
//         return res.send('Necesitas estar logado')
//     }
//     next()
// }

// function authRole (role) {
//     return (req, res, next) => {
//         if (req.user.role !== role) {
//             res.status(401)
//             return res.send('Ruta no permitida')
//         }
//         next()
//     }
// }