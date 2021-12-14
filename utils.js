/**
 * Deep extend an object.
 * @usage deepExtend(destinationObject, sourceObj1, sourceObj2, ...)
 * @param out
 * @returns {{}}
 */
function deepExtend(out) {
    out = out || {};
    
    for ( var i = 1; i < arguments.length; i++ ) {
        var obj = arguments[i];
        
        if ( !obj ) {
            continue;
        }
        
        for ( var key in obj ) {
            if ( obj.hasOwnProperty( key ) ) {
                if ( typeof obj[key] === 'object'
                    && obj[key] !== null
                    && !Array.isArray( obj[key] )
                    && !( obj[key] instanceof Date )
                    && !( obj[key] === 'function' ) ) {
                    out[key] = deepExtend( out[key], obj[key] );
                }
                else {
                    if ( Array.isArray( obj[key] ) ) {
                        out[key] = obj[key].slice();
                    }
                    else {
                        out[key] = obj[key];
                    }
                }
            }
        }
    }
    return out;
}

( function ($) {
	/**
	 * Check to see whether an element has the specified attribute and retrieve its value.
	 * @param attr The attribute to check for
	 * @param defaultValue The default value to return if the attribute doesn't exist
	 * @returns {mixed}
	 */
	$.fn.GetAttribute = function (attr, defaultValue) {
		var __attr = this.attr( attr );
		return typeof ( __attr !== 'undefined' ) ? __attr : defaultValue;
	};
}( jQuery ) );
