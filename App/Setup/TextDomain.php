<?php
/**
 * @package notwiz-calendar-block
 * @author kmix39
 * @license GPL-2.0+
 */

namespace Not_Wiz\Calendar\Block\App\Setup;

use Not_Wiz\Calendar\Block;

class TextDomain {

	public function __construct() {
		add_filter( 'load_textdomain_mofile', [ $this, '_load_textdomain_mofile' ], 10, 2 );
		load_plugin_textdomain( 'notwiz-calendar-block', false, basename( NOTWIZ_CALENDAR_BLOCK_DIR_PATH ) . '/languages' );
	}

	public function _load_textdomain_mofile( $mofile, $domain ) {
		if ( 'notwiz-calendar-block' === $domain ) {
			$mofilename   = basename( $mofile );
			$local_mofile = NOTWIZ_CALENDAR_BLOCK_DIR_PATH . '/languages/' . $mofilename;
			if ( file_exists( $local_mofile ) ) {
				return $local_mofile;
			}
		}
		return $mofile;
	}

}
