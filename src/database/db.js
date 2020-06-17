const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database("./src/database/database.db")
module.exports = db

db.serialize(() => {
    // db.run(`
    //                 create table if not exists places (
    //                     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //                     image TEXT,
    //                     name TEXT,
    //                     address TEXT,
    //                     address2 TEXT,
    //                     state TEXT,
    //                     city TEXT,
    //                     items TEXT
    //                 );
    //             `)

    //     //     //     //     const query = `
    //     //     //     //         insert into places (
    //     //     //     //             image,
    //     //     //     //             name,
    //     //     //     //             address,
    //     //     //     //             address2,
    //     //     //     //             state,
    //     //     //     //             city,
    //     //     //     //             items
    //     //     //     //         ) values (?,?,?,?,?,?,?);
    //     //     //     //     `
    //     //     //     //     const values = [
    //     //     //     //         "http://127.0.0.1:3000/images/papeis_papelao.jpeg",
    //     //     //     //         "Papersider",
    //     //     //     //         "Guilherme Gemballa, Jardim América",
    //     //     //     //         "Nº 260",
    //     //     //     //         "Santa Catarina",
    //     //     //     //         "Rio do Sul",
    //     //     //     //         "Papéis e Papelão"

    //     //     //     //     ]

    //     //     //     //     function afterInsertdata(err) {
    //     //     //     //         if (err) {
    //     //     //     //             return console.log(err)
    //     //     //     //         }
    //     //     //     //         console.log("cadastrado com sucesso!!")
    //     //     //     //         console.log(this)
    //     //     //     //     }

    //     //     //     //     db.run(query, values, afterInsertdata)



    // db.all(`
    //                     select * from places;
    //                 `, function(err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros:")
    //     console.log(rows)
    // })

    // db.run(`
    //         delete from places;
    //     `, function(err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!!")
    // })

})