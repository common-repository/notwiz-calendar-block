<?php
/**
 * Plugin name: NotWiz Calendar Block
 * Version: 1.0.5
 * Description: This plug-in is a Gutenberg Block on a calendar that supports regular events.
 * Author: kmix39
 * Author URI: https://not-wiz.net
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: notwiz-calendar-block
 *
 * @package notwiz-calendar-block
 * @author kmix39
 * @license GPL-2.0+
 */

namespace Not_Wiz\Calendar\Block;

class Bootstrap {

	public function __construct() {
		add_action( 'plugins_loaded', [ $this, '_bootstrap' ] );
	}

	public function _bootstrap() {
		new App\Setup\TextDomain();
		new App\Setup\Assets();

		add_filter( 'block_categories', [ $this, '_block_categories' ] );
	}

	public function _block_categories( $categories ) {
		$categories[] = [
			'slug'  => 'nwcb',
			'title' => __( 'NotWiz [Calendar]', 'notwiz-calendar-block' ),
		];
		return $categories;
	}

}

foreach ( glob( plugin_dir_path( __FILE__ ) . '/App/Setup/*.php' ) as $appFile ) {
	require_once( $appFile );
}

define( 'NOTWIZ_CALENDAR_BLOCK_DIR_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'NOTWIZ_CALENDAR_BLOCK_DIR_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'NOTWIZ_CALENDAR_BLOCK_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );

function is_gutenberg_page() {
	$post = get_post();
	return ( ! $post ) ? false : function_exists( '\is_gutenberg_page' ) && \is_gutenberg_page();
}

function is_block_editor() {
	return is_gutenberg_page() || ( function_exists( '\use_block_editor_for_post' ) && \use_block_editor_for_post( get_post() ) );
}

new \Not_Wiz\Calendar\Block\Bootstrap();
