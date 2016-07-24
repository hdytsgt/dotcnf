/**
 * dotcnf
 * Deadly simple environment variables
 * 
 * @author Hidayat Sagita
 * @url    https://github.com/hdytsgt
 * 
 */

'use strict';

const fs = require( 'fs' );

module.exports = ( file ) => {

	if( !file ) {
		file = './.cnf';
	}

	let confs  = fs.readFileSync( file, 'utf8' ),
	    output = {};
	
	confs
		.toString()
		.split( '\n' )
		.forEach( ( data ) => { 
			
			let datum = data.match( /(.*)=(.*)/ );

			if( datum[ 1 ] ) {
				let key   = datum[ 1 ],
				    value = datum[ 2 ] ? datum[ 2 ] : '';

				output[ key ] = value;
			}
		});

	return output;
};