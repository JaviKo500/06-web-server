const http = require('http');
 const server = http.createServer(( req, res ) => {
    console.log(req);
    // res.writeHead(200, {
    //     'Content-Type': 'application/json'
    // });
    res.setHeader('Content-Disposition', 'attachment; filename=list.csv')
    res.writeHead(200, {
        'Content-Type': 'application/csv'
    });
    const person = {
        id: 1,
        name: 'Javiko'
    }
    // res.write( JSON.stringify(person) );
    res.write( 'id: 12, sasasa' );
    res.write( 'id: 12, sasasa' );
    res.write( 'id: 12, sasasa' );
    res.end();
});

server.listen( 3000 );
console.log(`listen in port 3000`);